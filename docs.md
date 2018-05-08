---
layout: page
title: Documentation
permalink: /docs/
---

This is the documentation for *Unico*, a clean and responsive Jekyll template featuring image covers and a grid layout.

Installation
------------

Assuming you don't have Jekyll installed on your computer yet, extract the package `unico.zip` in the folder `unico`, then open a terminal and write:

{% highlight python %}
~ $ gem install jekyll bundler
~ $ cd unico
~/unico $ bundle install
{% endhighlight %}

When you are in the `unico` folder, the commands `jekyll server` or `bundle exec jekyll serve` will start your website's server; you can open a browser and test your site on `http://localhost:4000`. To stop the server, press `CTRL+C` in the terminal window. 

For more detailed instructions about Jekyll installation, please refer to [Jekyll's installation documentation](https://jekyllrb.com/docs/installation/).

Configuration
-------------

All configuration options can be found in three sections in `unico/_config.yml` in YAML format; every time you change this file you will have to restart Jekyll with `jekyll serve`.

### System settings

This section only contains the `host` option: set it to `0.0.0.0` to let other users in your local network access your site or delete it to deny access.

### Site settings

Global informations and layout configuration: 

- the `title` will be shown at the top of the page and as the page title in your browser;
- the `description` is shown as meta tag in the HTML head and in the footer of each page;
- set a `baseurl` if your site will be placed in a subfolder of your server root;
- `url` is your website's address; please note that some features (e.g. social network sharing buttons) could not work as long as this line is not correctly set;
- `paginate` sets the number of the posts in the home page; because of the grid layout, for best visual results this number should be in the form `3n+1` (e.g. 1, 4, 7, 10 etc.).

### User settings

Comments and social media settings:

- if you want to use [Disqus](http://disqus.com) to display comments, set `disqus_enabled` to `True` - the option is disabled by default; note that you should create a Disqus account manually;
- if `disqus_enabled` is set to `True`, `disqus_username` sets the username you choose for your Disqus account;
- `social_buttons` decides whether to display or not the share buttons (Twitter, Facebook and Google +) for each article;
- the lines `social_twitter`, `social_facebook` and `social_googleplus` control the share buttons individually, provided that `social_buttons` is set to `True`.

### Build settings

This section contains the Jekyll add-ons used to make *Unico* work; you probably won't need to change anything in there.

Layout and usage
----------------

Each post must be a Markdown file in the `_posts` directory; its name will have to be in the form `date-alias.markdown`, where `date` is the YYYY-MM-DD date of publication, as prescribed in Jekyll's [post writing documentation](https://jekyllrb.com/docs/posts/); please refer to the same page for a more detailed guide.

In the markdown file, the text of the article must be preceded by a [YAML front matter](https://jekyllrb.com/docs/frontmatter/), containing one or more of these tags:

{% highlight sh %}
---
layout: post
title:  "The title of your article"
date:   YYYY-MM-DD HH:MM:SS +/-TTTT
category: category
image: image_file_name
---
{% endhighlight %}

The `image` tag must indicate the name of an image file placed in the directory `unico/images/covers`, as shown in the sample posts. The `category` line can contain at most one entry.

Similarly, static pages (such as this one or the *About* page) must be Markdown files put in the website root directory; the text of the file must begin with a YAML front matter similar to this:

{% highlight php %}
---
layout: page
title: "Title of the page"
permalink: /alias-of-the-page/
---
{% endhighlight %}

followed by the text of the page; a link for each page will be shown in the main menu, in the site header.

The posts in the main page and any following page will be displayed as following:

1. the most recent post will occupy all the width of the window;
2. the list of the categories will be right below the first article;
3. the next posts will be shown in a 3-column grid layout.

Deployment
----------

The deployment options for any website built with *Unico* are the same provided by Jekyll; please refer to the [deployment page](https://jekyllrb.com/docs/deployment-methods/) in the Jekyll documentation for a complete guide.

Changelog
---------

	2016-09-23: first version (1.0)