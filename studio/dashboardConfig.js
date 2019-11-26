export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ddccb2976f40be46f8d540c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o9z1w6y1',
                  apiId: '9ebea59f-7bcc-43b0-999e-b247bea6f538'
                },
                {
                  buildHookId: '5ddccb29c98ffca6cb06dcab',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rdneww65',
                  apiId: 'f1d0e198-ef89-41d2-b4ff-26c3e8fbbcf7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/coreyjsax/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rdneww65.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
