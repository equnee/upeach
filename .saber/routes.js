
    export default [
      {
          path: "/posts/my-example-post.html",
          meta: {
            __relative: '_posts/my-example-post.md',
            __pageId: 'cf95ea54'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-my-example-post-md" */ "D:/upeach/peach/pages/_posts/my-example-post.md?saberPage=cf95ea54")
            
          }
        },
{
          path: "/posts/super-long-article.html",
          meta: {
            __relative: '_posts/super-long-article.md',
            __pageId: '2d9bd34e'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-super-long-article-md" */ "D:/upeach/peach/pages/_posts/super-long-article.md?saberPage=2d9bd34e")
            
          }
        },
{
          path: "/posts/super-short-article.html",
          meta: {
            __relative: '_posts/super-short-article.md',
            __pageId: '3c2589c7'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--_posts-super-short-article-md" */ "D:/upeach/peach/pages/_posts/super-short-article.md?saberPage=3c2589c7")
            
          }
        },
{
          path: "/about.html",
          meta: {
            __relative: 'about.md',
            __pageId: '2501ed6a'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--about-md" */ "D:/upeach/peach/pages/about.md?saberPage=2501ed6a")
            
          }
        },
{
          path: "/",
          meta: {
            __relative: 'index.md',
            __pageId: 'd8a37c34'
          },
          component: function() {
            
            return import(/* webpackChunkName: "page--index-md" */ "D:/upeach/peach/pages/index.md?saberPage=d8a37c34")
            
          }
        },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "D:/upeach/peach/node_modules/saber/vue-app/404.vue")
        }
      }
    ]