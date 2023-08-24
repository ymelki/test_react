import { Card, Icon, Image } from 'semantic-ui-react';

function ReposResults() {
  const data = [
    {
      id: 6498492,
      node_id: 'MDEwOlJlcG9zaXRvcnk2NDk4NDky',
      name: 'javascript',
      full_name: 'airbnb/javascript',
      private: false,
      owner: {
        login: 'airbnb',
        id: 698437,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5ODQzNw==',
        avatar_url: 'https://avatars3.githubusercontent.com/u/698437?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/airbnb',
        html_url: 'https://github.com/airbnb',
        followers_url: 'https://api.github.com/users/airbnb/followers',
        following_url:
          'https://api.github.com/users/airbnb/following{/other_user}',
        gists_url: 'https://api.github.com/users/airbnb/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/airbnb/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/airbnb/subscriptions',
        organizations_url: 'https://api.github.com/users/airbnb/orgs',
        repos_url: 'https://api.github.com/users/airbnb/repos',
        events_url: 'https://api.github.com/users/airbnb/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/airbnb/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/airbnb/javascript',
      description: 'JavaScript Style Guide',
      fork: false,
      url: 'https://api.github.com/repos/airbnb/javascript',
      forks_url: 'https://api.github.com/repos/airbnb/javascript/forks',
      keys_url: 'https://api.github.com/repos/airbnb/javascript/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/airbnb/javascript/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/airbnb/javascript/teams',
      hooks_url: 'https://api.github.com/repos/airbnb/javascript/hooks',
      issue_events_url:
        'https://api.github.com/repos/airbnb/javascript/issues/events{/number}',
      events_url: 'https://api.github.com/repos/airbnb/javascript/events',
      assignees_url:
        'https://api.github.com/repos/airbnb/javascript/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/airbnb/javascript/branches{/branch}',
      tags_url: 'https://api.github.com/repos/airbnb/javascript/tags',
      blobs_url:
        'https://api.github.com/repos/airbnb/javascript/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/airbnb/javascript/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/airbnb/javascript/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/airbnb/javascript/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/airbnb/javascript/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/airbnb/javascript/languages',
      stargazers_url:
        'https://api.github.com/repos/airbnb/javascript/stargazers',
      contributors_url:
        'https://api.github.com/repos/airbnb/javascript/contributors',
      subscribers_url:
        'https://api.github.com/repos/airbnb/javascript/subscribers',
      subscription_url:
        'https://api.github.com/repos/airbnb/javascript/subscription',
      commits_url:
        'https://api.github.com/repos/airbnb/javascript/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/airbnb/javascript/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/airbnb/javascript/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/airbnb/javascript/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/airbnb/javascript/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/airbnb/javascript/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/airbnb/javascript/merges',
      archive_url:
        'https://api.github.com/repos/airbnb/javascript/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/airbnb/javascript/downloads',
      issues_url:
        'https://api.github.com/repos/airbnb/javascript/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/airbnb/javascript/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/airbnb/javascript/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/airbnb/javascript/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/airbnb/javascript/labels{/name}',
      releases_url:
        'https://api.github.com/repos/airbnb/javascript/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/airbnb/javascript/deployments',
      created_at: '2012-11-01T23:13:50Z',
      updated_at: '2019-09-23T07:53:41Z',
      pushed_at: '2019-09-16T10:41:23Z',
      git_url: 'git://github.com/airbnb/javascript.git',
      ssh_url: 'git@github.com:airbnb/javascript.git',
      clone_url: 'https://github.com/airbnb/javascript.git',
      svn_url: 'https://github.com/airbnb/javascript',
      homepage: null,
      size: 2978,
      stargazers_count: 89026,
      watchers_count: 89026,
      language: 'JavaScript',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 17173,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 108,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      forks: 17173,
      open_issues: 108,
      watchers: 89026,
      default_branch: 'master',
      score: 151.55759,
    },
    {
      id: 18286232,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODI4NjIzMg==',
      name: 'javascript',
      full_name: 'GitbookIO/javascript',
      private: false,
      owner: {
        login: 'GitbookIO',
        id: 7111340,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjcxMTEzNDA=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/7111340?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/GitbookIO',
        html_url: 'https://github.com/GitbookIO',
        followers_url: 'https://api.github.com/users/GitbookIO/followers',
        following_url:
          'https://api.github.com/users/GitbookIO/following{/other_user}',
        gists_url: 'https://api.github.com/users/GitbookIO/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/GitbookIO/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/GitbookIO/subscriptions',
        organizations_url: 'https://api.github.com/users/GitbookIO/orgs',
        repos_url: 'https://api.github.com/users/GitbookIO/repos',
        events_url: 'https://api.github.com/users/GitbookIO/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/GitbookIO/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/GitbookIO/javascript',
      description: 'GitBook teaching programming basics with Javascript',
      fork: false,
      url: 'https://api.github.com/repos/GitbookIO/javascript',
      forks_url: 'https://api.github.com/repos/GitbookIO/javascript/forks',
      keys_url:
        'https://api.github.com/repos/GitbookIO/javascript/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/GitbookIO/javascript/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/GitbookIO/javascript/teams',
      hooks_url: 'https://api.github.com/repos/GitbookIO/javascript/hooks',
      issue_events_url:
        'https://api.github.com/repos/GitbookIO/javascript/issues/events{/number}',
      events_url: 'https://api.github.com/repos/GitbookIO/javascript/events',
      assignees_url:
        'https://api.github.com/repos/GitbookIO/javascript/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/GitbookIO/javascript/branches{/branch}',
      tags_url: 'https://api.github.com/repos/GitbookIO/javascript/tags',
      blobs_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/GitbookIO/javascript/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/GitbookIO/javascript/languages',
      stargazers_url:
        'https://api.github.com/repos/GitbookIO/javascript/stargazers',
      contributors_url:
        'https://api.github.com/repos/GitbookIO/javascript/contributors',
      subscribers_url:
        'https://api.github.com/repos/GitbookIO/javascript/subscribers',
      subscription_url:
        'https://api.github.com/repos/GitbookIO/javascript/subscription',
      commits_url:
        'https://api.github.com/repos/GitbookIO/javascript/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/GitbookIO/javascript/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/GitbookIO/javascript/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/GitbookIO/javascript/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/GitbookIO/javascript/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/GitbookIO/javascript/merges',
      archive_url:
        'https://api.github.com/repos/GitbookIO/javascript/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/GitbookIO/javascript/downloads',
      issues_url:
        'https://api.github.com/repos/GitbookIO/javascript/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/GitbookIO/javascript/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/GitbookIO/javascript/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/GitbookIO/javascript/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/GitbookIO/javascript/labels{/name}',
      releases_url:
        'https://api.github.com/repos/GitbookIO/javascript/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/GitbookIO/javascript/deployments',
      created_at: '2014-03-31T08:15:44Z',
      updated_at: '2019-09-23T03:02:12Z',
      pushed_at: '2019-09-12T22:55:30Z',
      git_url: 'git://github.com/GitbookIO/javascript.git',
      ssh_url: 'git@github.com:GitbookIO/javascript.git',
      clone_url: 'https://github.com/GitbookIO/javascript.git',
      svn_url: 'https://github.com/GitbookIO/javascript',
      homepage: 'https://www.gitbook.com/book/GitBookIO/javascript',
      size: 1267,
      stargazers_count: 1913,
      watchers_count: 1913,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 716,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 39,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      forks: 716,
      open_issues: 39,
      watchers: 1913,
      default_branch: 'master',
      score: 105.009125,
    },
    {
      id: 6498499,
      node_id: 'MDEwOlJlcG9zaXRvcnk2NDk4NDky',
      name: 'javascript',
      full_name: 'airbnb/javascript',
      private: false,
      owner: {
        login: 'airbnb',
        id: 698437,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjY5ODQzNw==',
        avatar_url: 'https://avatars3.githubusercontent.com/u/698437?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/airbnb',
        html_url: 'https://github.com/airbnb',
        followers_url: 'https://api.github.com/users/airbnb/followers',
        following_url:
          'https://api.github.com/users/airbnb/following{/other_user}',
        gists_url: 'https://api.github.com/users/airbnb/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/airbnb/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/airbnb/subscriptions',
        organizations_url: 'https://api.github.com/users/airbnb/orgs',
        repos_url: 'https://api.github.com/users/airbnb/repos',
        events_url: 'https://api.github.com/users/airbnb/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/airbnb/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/airbnb/javascript',
      description: 'JavaScript Style Guide',
      fork: false,
      url: 'https://api.github.com/repos/airbnb/javascript',
      forks_url: 'https://api.github.com/repos/airbnb/javascript/forks',
      keys_url: 'https://api.github.com/repos/airbnb/javascript/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/airbnb/javascript/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/airbnb/javascript/teams',
      hooks_url: 'https://api.github.com/repos/airbnb/javascript/hooks',
      issue_events_url:
        'https://api.github.com/repos/airbnb/javascript/issues/events{/number}',
      events_url: 'https://api.github.com/repos/airbnb/javascript/events',
      assignees_url:
        'https://api.github.com/repos/airbnb/javascript/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/airbnb/javascript/branches{/branch}',
      tags_url: 'https://api.github.com/repos/airbnb/javascript/tags',
      blobs_url:
        'https://api.github.com/repos/airbnb/javascript/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/airbnb/javascript/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/airbnb/javascript/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/airbnb/javascript/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/airbnb/javascript/statuses/{sha}',
      languages_url: 'https://api.github.com/repos/airbnb/javascript/languages',
      stargazers_url:
        'https://api.github.com/repos/airbnb/javascript/stargazers',
      contributors_url:
        'https://api.github.com/repos/airbnb/javascript/contributors',
      subscribers_url:
        'https://api.github.com/repos/airbnb/javascript/subscribers',
      subscription_url:
        'https://api.github.com/repos/airbnb/javascript/subscription',
      commits_url:
        'https://api.github.com/repos/airbnb/javascript/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/airbnb/javascript/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/airbnb/javascript/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/airbnb/javascript/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/airbnb/javascript/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/airbnb/javascript/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/airbnb/javascript/merges',
      archive_url:
        'https://api.github.com/repos/airbnb/javascript/{archive_format}{/ref}',
      downloads_url: 'https://api.github.com/repos/airbnb/javascript/downloads',
      issues_url:
        'https://api.github.com/repos/airbnb/javascript/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/airbnb/javascript/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/airbnb/javascript/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/airbnb/javascript/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/airbnb/javascript/labels{/name}',
      releases_url:
        'https://api.github.com/repos/airbnb/javascript/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/airbnb/javascript/deployments',
      created_at: '2012-11-01T23:13:50Z',
      updated_at: '2019-09-23T07:53:41Z',
      pushed_at: '2019-09-16T10:41:23Z',
      git_url: 'git://github.com/airbnb/javascript.git',
      ssh_url: 'git@github.com:airbnb/javascript.git',
      clone_url: 'https://github.com/airbnb/javascript.git',
      svn_url: 'https://github.com/airbnb/javascript',
      homepage: null,
      size: 2978,
      stargazers_count: 89026,
      watchers_count: 89026,
      language: 'JavaScript',
      has_issues: true,
      has_projects: false,
      has_downloads: true,
      has_wiki: true,
      has_pages: true,
      forks_count: 17173,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 108,
      license: {
        key: 'mit',
        name: 'MIT License',
        spdx_id: 'MIT',
        url: 'https://api.github.com/licenses/mit',
        node_id: 'MDc6TGljZW5zZTEz',
      },
      forks: 17173,
      open_issues: 108,
      watchers: 89026,
      default_branch: 'master',
      score: 151.55759,
    },
    {
      id: 1828665,
      node_id: 'MDEwOlJlcG9zaXRvcnkxODI4NjIzMg==',
      name: 'javascript',
      full_name: 'GitbookIO/javascript',
      private: false,
      owner: {
        login: 'GitbookIO',
        id: 7111340,
        node_id: 'MDEyOk9yZ2FuaXphdGlvbjcxMTEzNDA=',
        avatar_url: 'https://avatars0.githubusercontent.com/u/7111340?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/GitbookIO',
        html_url: 'https://github.com/GitbookIO',
        followers_url: 'https://api.github.com/users/GitbookIO/followers',
        following_url:
          'https://api.github.com/users/GitbookIO/following{/other_user}',
        gists_url: 'https://api.github.com/users/GitbookIO/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/GitbookIO/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/GitbookIO/subscriptions',
        organizations_url: 'https://api.github.com/users/GitbookIO/orgs',
        repos_url: 'https://api.github.com/users/GitbookIO/repos',
        events_url: 'https://api.github.com/users/GitbookIO/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/GitbookIO/received_events',
        type: 'Organization',
        site_admin: false,
      },
      html_url: 'https://github.com/GitbookIO/javascript',
      description: 'GitBook teaching programming basics with Javascript',
      fork: false,
      url: 'https://api.github.com/repos/GitbookIO/javascript',
      forks_url: 'https://api.github.com/repos/GitbookIO/javascript/forks',
      keys_url:
        'https://api.github.com/repos/GitbookIO/javascript/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/GitbookIO/javascript/collaborators{/collaborator}',
      teams_url: 'https://api.github.com/repos/GitbookIO/javascript/teams',
      hooks_url: 'https://api.github.com/repos/GitbookIO/javascript/hooks',
      issue_events_url:
        'https://api.github.com/repos/GitbookIO/javascript/issues/events{/number}',
      events_url: 'https://api.github.com/repos/GitbookIO/javascript/events',
      assignees_url:
        'https://api.github.com/repos/GitbookIO/javascript/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/GitbookIO/javascript/branches{/branch}',
      tags_url: 'https://api.github.com/repos/GitbookIO/javascript/tags',
      blobs_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/GitbookIO/javascript/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/GitbookIO/javascript/languages',
      stargazers_url:
        'https://api.github.com/repos/GitbookIO/javascript/stargazers',
      contributors_url:
        'https://api.github.com/repos/GitbookIO/javascript/contributors',
      subscribers_url:
        'https://api.github.com/repos/GitbookIO/javascript/subscribers',
      subscription_url:
        'https://api.github.com/repos/GitbookIO/javascript/subscription',
      commits_url:
        'https://api.github.com/repos/GitbookIO/javascript/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/GitbookIO/javascript/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/GitbookIO/javascript/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/GitbookIO/javascript/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/GitbookIO/javascript/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/GitbookIO/javascript/compare/{base}...{head}',
      merges_url: 'https://api.github.com/repos/GitbookIO/javascript/merges',
      archive_url:
        'https://api.github.com/repos/GitbookIO/javascript/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/GitbookIO/javascript/downloads',
      issues_url:
        'https://api.github.com/repos/GitbookIO/javascript/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/GitbookIO/javascript/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/GitbookIO/javascript/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/GitbookIO/javascript/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/GitbookIO/javascript/labels{/name}',
      releases_url:
        'https://api.github.com/repos/GitbookIO/javascript/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/GitbookIO/javascript/deployments',
      created_at: '2014-03-31T08:15:44Z',
      updated_at: '2019-09-23T03:02:12Z',
      pushed_at: '2019-09-12T22:55:30Z',
      git_url: 'git://github.com/GitbookIO/javascript.git',
      ssh_url: 'git@github.com:GitbookIO/javascript.git',
      clone_url: 'https://github.com/GitbookIO/javascript.git',
      svn_url: 'https://github.com/GitbookIO/javascript',
      homepage: 'https://www.gitbook.com/book/GitBookIO/javascript',
      size: 1267,
      stargazers_count: 1913,
      watchers_count: 1913,
      language: null,
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: false,
      forks_count: 716,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 39,
      license: {
        key: 'apache-2.0',
        name: 'Apache License 2.0',
        spdx_id: 'Apache-2.0',
        url: 'https://api.github.com/licenses/apache-2.0',
        node_id: 'MDc6TGljZW5zZTI=',
      },
      forks: 716,
      open_issues: 39,
      watchers: 1913,
      default_branch: 'master',
      score: 105.009125,
    },
  ];

  const items = data.map((repo) => (
    // on a une prop `as` pour définir la balise HTML qui
    // sera générée → pratique pour la sémantique !
    <Card key={repo.id} as="article">
      <Image src={repo.owner.avatar_url} wrapped ui={false} />

      <Card.Content>
        <Card.Header as="h2">{repo.name}</Card.Header>
        <Card.Meta as="h3">{repo.owner.login}</Card.Meta>
        <Card.Description as="p">{repo.description}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <a href={repo.html_url} target=" _blank" rel="noopener noreferrer">
          <Icon name="github alternate" />
          Voir sur GitHub
        </a>
      </Card.Content>
    </Card>
  ));

  return (
    <Card.Group as="section" itemsPerRow={3} stackable>
      {items}
    </Card.Group>
  );
}

export default ReposResults;
