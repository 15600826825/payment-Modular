 (function() {
  $(function(){
    //侧边导航菜单自动切换
    var pageId = $('#main').attr('data-id');
    var _link = $('a[data-href = '+pageId+' ]');
    _link.parent('li').addClass('active').parents('li').addClass('open');
  })
   var toggle = false;
   var speed = 200;
   var $aside = $('#aside'),
       $main = $('#main'),
       $header = $('#header');
   //侧边栏显示隐藏
    $('#btnToggle').on('click', function() {
       if (!toggle) {
         $aside.animate({ 'left': -240 }, speed)
         $main.animate({ 'left': 0 }, speed)
         $header.animate({'left': 0 }, speed)
       }else{
         $aside.animate({ 'left': 0 }, speed)
         $main.animate({ 'left': 240 }, speed)
         $header.animate({'left': 240 }, speed)
       }
       toggle = !toggle 
    })
   // 返回顶部
   var backTop = $('#backTop');
   backTop.on('click', function(){
    $('html, body').animate({'scrollTop': 0}, speed)
   })
   //手风琴菜单
   var Accordion = function(element, multiple) {
     this.element = element || {};
     this.multiple = multiple || false;

     var links = this.element.find('.link');
     links.on('click', {
       element: this.element,
       multiple: this.multiple
     }, this.dropdown)
     var submenuItem = links.next('.submenu').find('li');
     submenuItem.on('click', function(){
        $(this).addClass('active').siblings().removeClass('active')
              .parents('li').siblings().find('.active').removeClass('active')
     })
   }
    Accordion.prototype.dropdown = function(e) {
      var $element = e.data.element;
      var $this = $(this),
          $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');
      if(!e.data.multiple) {
        $element.find('.submenu').not($next).slideUp().parent().removeClass('open');
      };  
    }
    new Accordion($('#accordion'));  
 })(jQuery)