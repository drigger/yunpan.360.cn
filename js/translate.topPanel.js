function translate_topPanel() {
    rename('#logo', 'title', dict.topPanel_logo);
    rename('#topPanel .pan', 'text', dict.topPanel_file);
    rename('#topPanel .pan', 'title', dict.topPanel_file_title);
    rename('#topPanel .xiangce', 'text', dict.topPanel_xiangce);
    rename('#topPanel .xiangce', 'title', dict.topPanel_xiangce_title);
    rename('#topPanel .collect', 'text', dict.topPanel_collect);
    rename('#topPanel .collect', 'title', dict.topPanel_collect_title);
    rename('#topPanel .more', 'text', dict.topPanel_more);
    rename('#topPanel .more', 'title', dict.topPanel_more_title);
    var nav_a = document.querySelectorAll('.nav-bar a');
    for (var i = 0; i < nav_a.length; i++) {
        nav_a[i].style.width = 'auto';
        nav_a[i].style.background = 'none';
        nav_a[i].style.textIndent = '0';
        nav_a[i].style.lineHeight = '56px';
        nav_a[i].style.fontSize = '20px';
        nav_a[i].style.color = '#fff';
    }
}

