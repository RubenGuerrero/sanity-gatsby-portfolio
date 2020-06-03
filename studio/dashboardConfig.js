export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ed80d885a09910265bae765',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zjugorec',
                  apiId: 'f7b757dc-e0c1-47f2-b059-1b8e4e8771b5'
                },
                {
                  buildHookId: '5ed80d88f11bf60239939c7b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-1ntm1k8q',
                  apiId: '62401d7a-19c9-477e-9d8b-467b374019ca'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RubenGuerrero/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-1ntm1k8q.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
