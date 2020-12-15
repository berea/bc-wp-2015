<?php
/**
 * Two Column, Right-Sidebar
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css?cff737165d).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package berea
 */

get_header(); ?>



<?php



?>

<!doctype html>
<head>

      <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/algolia-min.css"
    />
<style>


.ais-ClearRefinements {
  margin: 1em 0;
}

.ais-SearchBox {
  margin: 1em 0;
}

.ais-Pagination {
  margin-top: 1em;
}

/*
.left-panel {
  margin-left: 5px;
  float: right;
  width: 225px;
  background-color: white;
  padding: 25px;
}
*/

/*
.right-panel {
  margin-right: 260px;
  background-color:white;
  padding:25px;
}
*/

.left-panel {
  margin-left: 5px;
  padding: 25px;
}

.ais-InstantSearch {
  max-width: 960px;
  overflow: hidden;
  margin: 0 auto;
  padding: 25px;
  background-color: white;
}

input[type=text]{
  padding: 0.5em 0.5em 0.5em 2em;
}

.ais-Hits-item {
  margin-bottom: 1em;
  width: calc(100% - 1rem);
}

.ais-Hits-item img {
  margin-right: 1em;
}

.hit-name {
  margin-bottom: 0.5em;
}

.hit-description {
  color: #888;
  font-size: 14px;
  margin-bottom: 0.5em;
}

label {
  font-weight: normal;
}

.h2-searchbar
{
font-size: 30px;
    font-family: "Open Sans Condensed", "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
    font-weight: 300;
    font-style: Normal;
    text-decoration: underline;
    color: #c75b12;
}

</style>
 
</head>


<body>







<main id="main" class="site-main" role="main">
	


         <div id="primary" class="content-area">
          <div class="right-panel">

          <h1 class="entry-title" itemprop="name">Faculty Expertise Search</h1>
        <div id="searchbox" class="ais-SearchBox"></div>
        <div id="hits"></div>
        <div id="pagination"></div>

      </div>
      </div>




      <div id="secondary">
        <div class="left-panel">
        <div id="clear-refinements"></div>

        <h2 class="h2-searchbar">Graduate School</h2>
        <div id="brand-list"></div>
      </div>

      </div>




 



  </main>

<?php get_footer(); ?>
 

    <!--script src="https://cdn.jsdelivr.net/npm/algoliasearch@3.32.0/dist/algoliasearchLite.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/instantsearch.js@3.0.0"></script>
    <script-->

    <script src="https://cdn.jsdelivr.net/npm/algoliasearch@3.32.0/dist/algoliasearchLite.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/instantsearch.js@3.0.0"></script>


    <script>
      

/* global instantsearch algoliasearch */

/* OLD
const search = instantsearch({
  indexName: 'wp_policy_index',
  searchClient: algoliasearch('42PGXXD20K', '5d0370a8ebc721ea5fb26251630b21a4'),
});
*/

const search = instantsearch({
  indexName: 'faculty_expertise',
  searchClient: algoliasearch('42PGXXD20K', '4af90b51ba10132d3b7046e77ac7f265'),
});


search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  })
);

search.addWidget(
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: 'Graduate',
    limit: 50,
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
  
          <div class="hit-name">
            {{Last Name}}, {{First Name}}
            <br>Email: <a href='mailto:{{mail}}' target='_top'>{{Email}}</a>
            <br>LinkedIn: <a href='LinkedIn' target='_top'>{{LinkedIn}}</a>
          </div>
          <div class="hit-description">
            Areas of Expertise: {{#helpers.highlight}}{ "attribute": "Topics of Expertise" }{{/helpers.highlight}}
            <br>Undergrad: {{UnderGrad}}
            <br>Graduate: {{Graduate}}
            <br>Post-Graduate: {{Post-Graduate}}
          </div>
        </div>
      `,
    },
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
  })
);

search.start();



    </script>


</body>



    




