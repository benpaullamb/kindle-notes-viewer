import cheerio from 'cheerio';

const getBookInfo = ($) => {
  return {
    title: $('.bodyContainer .bookTitle')
      .text()
      .trim(),
    authors: $('.bodyContainer .authors')
      .text()
      .trim(),
  };
};

const getText = (noteText) => {
  return noteText
    .contents()
    .first()
    .text()
    .trim();
};

const getPageAndColour = (noteText) => {
  const noteHeading = noteText.find('.noteHeading').text();
  if (noteHeading) {
    const metaRegex = /^highlight \((\w+)\) - page (\d)/i;
    const matches = noteHeading.match(metaRegex);
    return {
      colour: matches[1],
      page: Number(matches[2]),
    };
  }
};

const store = (book, text, highlightInfo, sectionHeading) => {
  const section = book.sections.find(({ heading }) => heading === sectionHeading);
  if (section) {
    section.highlights.push({
      text,
      ...highlightInfo,
    });
  } else {
    book.sections.push({
      heading: sectionHeading,
      highlights: [
        {
          text,
          ...highlightInfo,
        },
      ],
    });
  }
};

export default async (file) => {
  const text = await file.text();
  const $ = cheerio.load(text);

  const book = {
    ...getBookInfo($),
    sections: [],
  };

  let nextSectionHeading = $('.bodyContainer .sectionHeading').text();
  let nextHighlightInfo = getPageAndColour($('.bodyContainer'));

  $('.noteText').each(function() {
    const noteText = $(this);
    const text = getText(noteText);

    store(book, text, nextHighlightInfo, nextSectionHeading);

    const sectionHeading = noteText.find('.sectionHeading').text();
    if (sectionHeading) {
      nextSectionHeading = sectionHeading;
    }

    nextHighlightInfo = getPageAndColour(noteText);
  });

  return book;
};
