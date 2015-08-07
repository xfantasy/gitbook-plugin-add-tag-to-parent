# 使用

当gitbook做为其它页面的子页面嵌入时，在gitbook所在的iframe内切换文章时，并不会在父页面的url中反映出来，这将导致不能复制文章的url时总是会跳到这个gitbook的首页，极为不方便。

此插件安装后，会在切换文章的时候，将当前章节url的最后一部分做为url hashkey追加在父页面url的未尾，如：

gitbook页面url为：

`http://localhost/xxx-gitbook/pageA.html`

则其父窗口的url会显示为：

`http://localhost/path/to/page.html#pageA.html`

当然，你还需要在父容器的js代码里添加处理hashkey的部分的代码，将iframe跳转到对应的页面。

比如：

```
$(function() {

  // 如果存在hashkey，则将iframe跳转到对应的页面
  if (location.hash && location.hash != '') {
    var iframe = $('#iframe-id');
    var srcFrament = iframe.attr('src').split('/');
    srcFrament.pop();
    srcFrament.push(location.hash.substr(1));
    iframe.attr('src', location.origin + srcFrament.join('/'));
  }

});
```