---
title: Utiliser Google Material Design Lite comme alternative de Bootstrap
description: Un nouveau framework vient concurrencer Bootstrap de Twitter, Google Material Design Lite
author: Simon
date: 2015-07-12
url: /utiliser-google-material-design-lite-comme-alternative-de-bootstrap/
categories: Design
tags: Ressources
---
## CSS et Javascript framework

Développé et partagé open source par Twitter, <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> à été une révolution pour beaucoup de développeur de site internet. Il s&rsquo;agit d&rsquo;un framework qui comporte déjà tous les éléments dont vous avez besoin pour créer un site internet ou un blog. Il suffit simplement de les assembler dans le bon ordre pour sauver des centaines d&rsquo;heures de codes.

Google à aussi travaillé sur un framework similaire et vient maintenant de le mettre à la disposition de tous, gratuitement. Son nom **Material Design Lite**.

## Introduction à Material Design Lite

Vous allez tout de suite remarqué que le design est identique à celui que Google utilise sur ses sites et sur Android. L&rsquo;idée derrière ce nouveau framework CSS et Javascript c&rsquo;est d&rsquo;avoir une correspondance entre le comportement des matériaux dans la vraie vie et un équivalent sur les applications et sites internet.

Vous allez donc retrouver des spécifications pour donner de la profondeur avec des shadows par exemple. On retrouve aussi le style épuré introduit avec Android Lollipop.

## Comment installer Material Design Lite (MDL)

Commencez pas vous rendre sur le <a href="http://www.getmdl.io/started/index.html" target="_blank">site officiel de MDL</a>. 

Vous avez besoin de deux fichiers pour faire fonctionner correctement le framework. Un fichier CSS et un fichier javascript. Un fichier optionnel comporte la définition des icônes.

Selon le type de site que vous avez, vous pouvez installer ces deux fichiers de plusieurs manières.  
Vous pouvez trouver plus d&rsquo;exemple et de description directement sur le [installer MDL](http://www.getmdl.io/started/index.html).

### MDL sur un site sans framework

<pre>
  <code class="language-html">
&lt;link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css"&gt;
&lt;script src="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js"&gt;&lt;/script&gt;
&lt;link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"&gt;
</code>
</pre>

### Sous WordPress

Ajouter les lignes suivantes dans le fichier <mark>function.php</mark> de votre thème.  
Cela va permettre d&rsquo;ajouter les fichier CSS et JS à votre site.

<pre>
<code class="language-php">
function ajouter_mdl_scripts() {
  wp_enqueue_style('mdl-css', 'https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css' );
  wp_enqueue_style('mdl-icon', 'https://fonts.googleapis.com/icon?family=Material+Icons' );
  wp_enqueue_script( 'mdl-js', 'https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js');
}
add_action( 'wp_enqueue_scripts', 'ajouter_mdl_scripts' );
</code>
</pre>

## Exemple d&rsquo;utilisation de Material Design Lite

### Boutons

<img src="http://www.bygga.fr/wp-content/uploads/2015/07/bouton.jpg" alt="bouton" width="117" height="52" class="aligncenter size-full wp-image-1063" />

<pre>
<code class="language-html">
&lt;button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"&gt;
  Button
&lt;/button&gt;
</code>
</pre>

### Cards

Un des éléments clé des produits Google : Cards. Pensez à Google Now par exemple.  
Un peu plus difficile puisque vous devez aussi ajouter du style dans votre fichier <mark>style.css</mark>

<img src="http://www.bygga.fr/wp-content/uploads/2015/07/card-mdl.jpg" alt="Exemple de card" width="527" height="310" class="aligncenter size-full wp-image-1064" />  

<pre>
<code class="language-css">
.demo-card-wide.mdl-card {
    width: 512px;
  }
  .demo-card-wide &gt; .mdl-card__title {
    color: #fff;
    height: 176px;
    background: url('../assets/demos/welcome_card.jpg') center / cover;
  }
  .demo-card-wide &gt; .mdl-card__menu {
    color: #fff;
  }
</code>
</pre>

<pre>
<code class="language-html">
&lt;div class="mdl-card mdl-shadow--2dp demo-card-wide"&gt;
  &lt;div class="mdl-card__title"&gt;
    &lt;h2 class="mdl-card__title-text"&gt;Welcome&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class="mdl-card__supporting-text"&gt;
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris sagittis pellentesque lacus eleifend lacinia...
  &lt;/div&gt;
  &lt;div class="mdl-card__actions mdl-card--border"&gt;
    &lt;a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"&gt;
      Get Started
    &lt;/a&gt;
  &lt;/div&gt;
  &lt;div class="mdl-card__menu"&gt;
    &lt;button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"&gt;
      &lt;i class="material-icons"&gt;share&lt;/i&gt;
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code>
</pre>

