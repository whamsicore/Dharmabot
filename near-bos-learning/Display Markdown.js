// comment markdown

const text = `
  #### Markdown Section
  Example of **markdown** *code* with an [url](example.com)
`;

return (
  <>
    <div class="container border border-info pt-3 text-center">
      <Markdown text={text} />
    </div>
  </>
);

