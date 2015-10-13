---
title: Comment installer facilement Bootstrap 3 sous WordPress
description: Un guide qui explique comment simplement installer Bootstrap 3 sous WordPress avec et sans plugin
author: Simon
date: 2013-10-12
url: /installer-bootstrap-3-wordpress/
categories: Développement Web
tags: WordPress
---
## Pourquoi utiliser Bootstrap et WordPress

Bootstrap est un outil très pratique développé par Twitter et open-source. Il s&rsquo;agit d&rsquo;une collection de CSS et de javascript qui vous permet de créer un site internet moderne et complexe en seulement quelque lignes de code. 

Vous n&rsquo;avez pas à vous prendre la tête pour créer un bouton ou une fenêtre modale. Il vous suffit d&rsquo;utiliser la bonne classe CSS dans votre code, et le tour est joué.

<a href="http://getbootstrap.com/" title="Site officiel de bootstrap 3" target="_blank">Bootstrap 3</a> s&rsquo;intègre très facilement avec WordPress. Il vous suffit soit d&rsquo;installer un plugin ou bien copier quelques lignes de code dans votre thème. 

## Installer Bootstrap 3 avec un plugin

<img src="http://www.bygga.fr/wp-content/uploads/2013/10/Wordpress-twitter-plugin.jpg" alt="Wordpress-twitter-plugin" width="600" height="196" class="aligncenter size-full wp-image-928" />  

L&rsquo;un des intérêt de WordPress c&rsquo;est qu&rsquo;il est possible d&rsquo;installer facilement de nouvelles fonctions sans avoir à toucher une seule ligne de code. Rendez-vous dans l&rsquo;onglet &laquo;&nbsp;extensions&nbsp;&raquo; et &laquo;&nbsp;Ajouter&nbsp;&raquo; puis chercher pour le plugin suivant : &laquo;&nbsp;WordPress Twitter Bootstrap CSS&nbsp;&raquo;. Vous pouvez aussi le télécharger directement sur le site de <a href="http://wordpress.org/plugins/wordpress-bootstrap-css/" title="Wordpress Bootstrap CSS" target="_blank">WordPress</a>.

## Installer Bootstrap 3 manuellement

Installer Bootstrap 3 manuellement dans WordPress est très simple. Presque aussi simple que d&rsquo;utiliser un plugin finalement. Ouvrez le fichier <code>function.php</code> de votre thème et copier le code suivant:

<pre class="language-php"><code>function bygga_bootstrap_scripts()
{
    if (!is_admin()) {
        wp_register_script('bootstrapjs', '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js', array(), '3.0.0'); 
        wp_enqueue_script('bootstrapjs');
    }
}
add_action('init', 'bygga_bootstrap_scripts');
function bygga_bootstrap_styles()
{    
    wp_register_style('bootstrapcss', '//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css', array(), '3.0.0', 'all');
    wp_enqueue_style('bootstrapcss');
}
add_action('wp_enqueue_scripts', 'bygga_bootstrap_styles');</code>
</pre>

Cette syntaxe est la méthode officielle recommandée par WordPress pour <a href="http://www.tweetpress.fr/codewp/inserer-scripts-css-proprement/" title="Ajouter CSS et Javascript sous WordPress" target="_blank">ajouter du CSS ou Javascript</a>.

Vous n&rsquo;avez pas besoin d&rsquo;ajouter aucun fichier à votre installation. Les fichiers sont hébergé sur un server CDN. Sans rentrer dans les détails, c&rsquo;est très bien pour vous puisque cela devrait rendre le chargement de ces fichier rapide lorsqu&rsquo;un visiteur visite votre site.

Une fois que vous avez copié ces lignes, vous pouvez modifier votre thème pour y ajouter le CSS ou Javascript qui vous plait. 

Par exemple pour [ajouter un bouton][1], vous pouvez utiliser le code html suivant:

<pre class="language-html"><code>&lt;button type="button" class="btn btn-primary"&gt;Primary&lt;/button&gt;</code>
</pre>

Qui donne comme résultat  

<img src="http://www.bygga.fr/wp-content/uploads/2013/10/bouton-bootstrap.jpg" alt="bouton-bootstrap" width="79" height="48" class="aligncenter size-full wp-image-927" />

## Utiliser un thème WordPress avec Boostrap

Utiliser les deux méthodes ci-dessus signifie que vous aller utiliser le design et look classique de Bootstrap. Ce n&rsquo;est pas forcement l&rsquo;effet que vous voulez. Votre thème risque de ressembler à des milliers d&rsquo;autres. Vous pouvez difficilement personnaliser les couleurs ou la taille des polices de caractère. 

La meilleure solution pour sortir du lot et avoir un version de Bootstrap au design différent c&rsquo;est d&rsquo;utiliser un <a href="http://www.bygga.fr/10-theme-wordpress-agence-communication/" title="10 Theme WordPress pour Agence de Communication" target="_blank">thème WordPress</a> déjà personalisé avec Boostrap. Il en existe des dixaines, mais voici quelques idées:

### Room Cartoon

[<img src="http://www.bygga.fr/wp-content/uploads/2013/10/Room-Cartoons-WordPress.jpg" alt="Room-Cartoons-WordPress" width="600" height="289" class="aligncenter size-full wp-image-929" />][2]

### News Grid

[<img src="http://www.bygga.fr/wp-content/uploads/2013/10/news-grid.jpg" alt="news-grid" width="600" height="305" class="aligncenter size-full wp-image-930" />][3]

### Political press

[<img src="http://www.bygga.fr/wp-content/uploads/2013/10/political-press.jpg" alt="political-press" width="600" height="305" class="aligncenter size-full wp-image-931" />][4]

 [1]: http://www.bygga.fr/generateur-de-bouton-formulaire-icone-ruban-css-html/ "Générateur de bouton"
 [2]: http://themeforest.net/item/room-cartoons-word-press/5478356?ref=bygga
 [3]: http://themeforest.net/item/news-grid-wp-magazine-theme/5624719?ref=bygga
 [4]: http://themeforest.net/item/political-press-responsive-wordpress-theme/5748117?ref=bygga
