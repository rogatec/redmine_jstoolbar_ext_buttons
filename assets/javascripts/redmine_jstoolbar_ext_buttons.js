(function () {
  if(typeof RedmineWikiToolbarExt === 'undefined') return false;

  var web_root = RedmineWikiToolbarExt.Paths.web_root();

  var buttons = [
    // Horizontal Rule
    {
      title: 'Horizontal Rule', after: 'h3',
      fn: { wiki: function () {
        this.encloseLineSelection('\n---\n', '', function (str) {
          if (str.length > 0) str += '\n';
          return str;
        });
      }}
    },

    // PHP
    {
      title: 'PHP', after: 'pre',
      fn: { wiki: function () {
        this.encloseLineSelection('~~~ php\n', '\n~~~\n')
      }}
    },

    // Javascript
    {
      title: 'Javascript', after: 'php',
      fn: { wiki: function () {
        this.encloseLineSelection('~~~ javascript\n', '\n~~~\n')
      } }
    },

    // Link Title
    {
      title: 'Link Title', after: 'link',
      fn: { wiki: function (event) {
        var link_title = {
          textile: {beg: '"Link Title":', end: ''},
          markdown: {beg: '[Link Title](', end: ')'}
        };
        var type = RedmineWikiToolbarExt.Markup.type();
        this.encloseSelection(link_title[type].beg, link_title[type].end, function (str) {
          if (str.length == 0) str = 'link';
          return str;
        })
      }}
    }
  ];

  /**
   * Draw to page
   */
  RedmineWikiToolbarExt.ToolbarElements.add(buttons);
}());
