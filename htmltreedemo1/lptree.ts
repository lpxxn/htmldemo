/**
 * Created by admin on 2017/7/4.
 */

class LpTree {
    treeContainer: JQuery;
    constructor(container: JQuery, public hyperlinkClick:((obj: HTMLElement) => {})) {
        this.treeContainer = container;
        this.inti();
        this.initStyle();
    }

    private initStyle() {
        // 隐藏所有子级节点
        this.treeContainer.find("ul ul").hide();
        // 移除所有父节点的open 样式
        this.treeContainer.find("ul ul").prev("li").removeClass("open");

        // 显示show属性为true的子级菜单
        this.treeContainer.find("ul ul[show='true']").show();
        this.treeContainer.find("ul ul[show='true']").prev("li").addClass("open");	/* 添加 show 属性为 true 的子级菜单父节点的 open 样式 */
    }

    private inti() {
        var self = this;

        // 设置链接不响应单击事件
        this.treeContainer.find("a").click(function () {
            $(this).parent("li").click();
            return false;
        });

        /* 菜单项 <li>单击事件 */
        this.treeContainer.find("li").click(function () {
               var aObj = $(this).find("a")[0];
               if (aObj) {
                   self.hyperlinkClick(aObj);
               }

               // 如果包含子项
               if ($(this).next("ul").attr("show") === "true") {
                   $(this).next("ul").attr("show", "false");
               } else {
                   $(this).next("ul").attr("show", "true");
               }
              self.initStyle();
        });

        this.treeContainer.find("li").hover(
            function(){
                $(this).addClass("hover");
            },
            function(){
                $(this).removeClass("hover");
            }
        );

        // 设置父节点的样式
        this.treeContainer.find("ul").prev("li").addClass("folder");

        // 设置节点是否包含子节点
        this.treeContainer.find("li").attr("hasChild", "false");
        this.treeContainer.find("ul").prev("li").find("a").attr("hasChild", "true");
    }
}
