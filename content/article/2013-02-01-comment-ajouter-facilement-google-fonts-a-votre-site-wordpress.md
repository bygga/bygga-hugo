---
title: Comment ajouter facilement Google Fonts à votre site WordPress
description: Voici comment ajouter un script pour charger les Google Fonts sur WordPress
author: Simon
date: 2013-02-01
url: /comment-ajouter-facilement-google-fonts-a-votre-site-wordpress/
categories: Développement Web
tags: WordPress
---

Avec l&rsquo;arrivée de CSS3, il est bien plus facile d&rsquo;avoir un site internet attractif. L&rsquo;une des possibilités qui s&rsquo;offre désormais aux concepteurs de site internet, c&rsquo;est d&rsquo;ajouter une police de caractère originale et ce facilement.

Pour cela on peut utiliser Google Web Fonts qui permet de choisir parmi plus de 616 (à l&rsquo;heure de l&rsquo;écriture de cet article) polices de caractère, fonts en anglais, pour votre design.

## Choisir la police sur Google Web Fonts

La première étape consiste à sélectionner la police de caractère qui convient le mieux à votre site. Vous pouvez choisir une ou plusieurs polices selon le design souhaité pour votre site internet. Mon conseil c&rsquo;est tout de même de ne pas sélectionner plus de deux polices. Vous pouvez par exemple en avoir une pour les titres et une pour le texte.

Rendez-vous sur <a href="http://www.google.com/webfonts" title="Google Web Fonts" target="_blank">Google Web Fonts</a> pour voir l&rsquo;ensemble des polices disponibles. Grace aux onglets du haut de la page vous pouvez sélectionner un aperçu pour différent type de contenu : mot, phrase, paragraphe.

<img src="http://www.bygga.fr/wp-content/uploads/2013/01/Google-Web-Fonts.jpg" alt="Quick use" width="600" height="294" class="aligncenter size-full wp-image-529" /> 

Une fois la police choisie, cliquez sur <code>Quick use</code>. Si la police le permet, choisissez un ou plusieurs styles pour cette font. Gardez en mémoire que plus vous en choisissez, plus le temps de chargement de votre page sera long.

## Utiliser la police de Google Font dans WordPress

Pour maintenant utiliser dans votre site internet vous devez suivre la procédure suivante. Cette méthode pour insérer Google Font fonctionne à la fois pour les sites sous WordPress et pour les autres.

Rendez vous dans le fichier qui contient la balise HTML <code>&lt;head&gt;</code>Classiquement elle se situe dans le fichier <code>header.php</code>. Insérez le code que vous avez récupéré avec votre font :  
<img src="http://www.bygga.fr/wp-content/uploads/2013/01/Google-Web-Fonts1.jpg" alt="Import Google Font" width="600" height="161" class="aligncenter size-full wp-image-531" />

<pre class="language-html"><code>&lt;link href='http://fonts.googleapis.com/css?family=Fruktur' rel='stylesheet' type='text/css'&gt;</code></pre>

Avec cette étape vous avez demandé au navigateur internet de télécharger la police de caractère directement sur le site de Google. Vous devez maintenant associer cette police à la balise que vous voulez.

Dans cette exemple je veux que mes titres utilisent ma nouvelle police. Allez donc dans votre fichier CSS, classiquement <code>style.css</code> et insérez le code suivant (ou similaire selon votre cas) :

<pre class="language-css"><code>h1, h2, h3, h4, h5, h6 {
   font-family: 'Fruktur', serif;
}</code>
</pre>

**Explication :** Fruktur correspond à la police que j&rsquo;ai chargé. Utilisez le nom de votre police. Sherif correspond à la police par défaut que le navigateur doit afficher s&rsquo;il y a un problème pour afficher votre Google Font.

## Fonctions avancées

### Charger plusieurs polices en une seule ligne

Si vous voulez ajouter plusieurs polices en une seule fois, vous pouvez les regrouper et utiliser le séparateur | . 

<pre class="language-html"><code>&lt;link href='http://fonts.googleapis.com/css?family=Fruktur|Stalemate' rel='stylesheet' type='text/css'&gt;</code></pre>

### Ajouter un effet à la police

Google teste une nouvelle fonctionnalité qui pour le moment n&rsquo;est pas supportée par tous les navigateurs internet. Vous pouvez consulter la liste de tous les effets et leur compatibilité <a href="https://developers.google.com/webfonts/docs/getting_started?#Effects" title="Google Web Font effets" target="_blank">ici</a>.  

<img src="http://www.bygga.fr/wp-content/uploads/2013/01/animation.jpg" alt="Effet google Font" width="600" height="306" class="aligncenter size-full wp-image-541" />  

Par exemple si je veux utiliser l&rsquo;effet &laquo;&nbsp;feu&nbsp;&raquo; je peux charger la police comme précédemment mais en ajoutant le nom de l&rsquo;effet dans l&rsquo;url.

<pre class="language-html"><code>&lt;link href='http://fonts.googleapis.com/css?family=Fruktur|Stalemate&amp;effect=fire' rel='stylesheet' type='text/css'&gt;</code></pre>

Je peux ensuite simple utiliser cet effet en le ciblant comme classe d&rsquo;un <code><pre>&lt;div&gt;</pre></code> par exemple. Pour cela il faut utiliser la classe : &laquo;&nbsp;font-effect&nbsp;&raquo; suivit du nom de l&rsquo;effet.  
Ce qui donne :

<pre class="language-html"><code>&lt;div class="font-effect-fire"&gt;Je suis en feu&lt;div&gt;</code></pre>