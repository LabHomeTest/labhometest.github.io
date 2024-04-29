document.addEventListener('DOMContentLoaded', function() {
    var curHrefList = window.location.href.split('/');

    //导航栏
    var navs = ["Index", "Publications", "Projects", "Team"];
    // 定位到头部导航栏容器
    var navbarContainer = document.getElementById('navbar-container');

    // 创建头部导航栏元素
    var navbarElement = document.createElement('div');
    var myHtml = ' <ul class="navbar">';
    for(var i = 0;i<navs.length;i++){
        var pageName = navs[i];
        if(navs[i] == "Index"){
            pageName = "Home";
        }
        if(curHrefList[curHrefList.length-1] == navs[i]+'.html'){
            myHtml = myHtml + '<li><a href="' + navs[i] +'.html" class = "active">'+ pageName +'</a></li>';
        }else{
            myHtml = myHtml + '<li><a href="' + navs[i] +'.html">'+ pageName +'</a></li>';
        }
    }
    myHtml = myHtml + '</ul>';
    // navbarElement.innerHTML = ' <ul class="navbar"><li><a href="javascript:;" pageNum="1" class="active">HomePage</a></li><li><a href="javascript:;" pageNum="2">Published</a></li><li><a href="javascript:;" pageNum="3">Projects</a></li><li><a href="javascript:;" pageNum="4">Team</a></li></ul>';
    navbarElement.innerHTML = myHtml;
    // 将头部导航栏元素插入到容器中
    navbarContainer.appendChild(navbarElement);

    // 获取所有导航栏项
    var navItems = document.querySelectorAll('#navbar-container a');

    // 为每个导航栏项注册点击事件处理程序
    for (var i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function(event) {
            // 取消默认行为
            event.preventDefault();

            $(".navbar li a").removeClass("active");
            $(this).addClass("active");
            // 移除当前选中样式
            // var selectedNavItem = navbarContainer.querySelector('.active');
            // if (selectedNavItem) {
            //     selectedNavItem.classList.remove('active');
            // }

            // 添加当前导航栏项的选中样式
            //this.classList.add('active');
            // 获取导航栏项的链接地址并重定向页面
            var href = this.getAttribute('href');
            window.location.href = href;
        });
    }

    // $(document).ready(function(){
    //     $(".navbar li a").click(function(){
    //         $(".navbar li a").removeClass("active");
    //         $(this).addClass("active");
    //         // var navNum = $(this).attr("pageNum");
    //         // $("#pageContent").children().attr("src", navs[navNum]);
    //     });
        
    // });
        
});

