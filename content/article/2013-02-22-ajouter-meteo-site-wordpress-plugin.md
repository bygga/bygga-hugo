---
title: Ajouter facilement la météo sur votre site WordPress avec un plugin
description: Un plugin tout simple pour afficher la météo en français sur votre site WordPress
author: Simon
date: 2013-02-22
url: /ajouter-meteo-site-wordpress-plugin/
categories: Développement Web
tags: WordPress
---
## Pourquoi avoir la météo sur votre site ?

Il existe deux raisons pour lesquels vous pouvez vouloir ajouter la météo sous votre site internet : Parce que c’est utile, pour faire croire que vous êtes un bon programmeur.

La deuxième raison est bien sûr inutile, parce que intégré un bulletin Météo avec la température et les conditions climatiques d’une ville est un jeu d’enfant et ne demande aucune programmation ! Juste l’installation d’un plugin gratuit.

Si votre site internet propose les services suivants, ajoutez définitivement ce plugin pour apporter du contenu relevant et aider vos visiteurs.

  * Un site avec des évènements en extérieurs (concert, BBQ, match de foot, etc…)
  * Un site d’un parc, parc botanique, parc d’attraction, etc…
  * Un site de voyage avec des destinations exotiques et radieuses ou bien sur une station de ski
  * etc…

Si votre site web sert à [vendre et promouvoir un ebook][2], inutile de vous dire que vous aurez l’air stupide avec un plugin de météo. Je vous aurai prévenu.

## Utiliser Weather Layer

Weather Layer permet d&rsquo;afficher la météo d&rsquo;une ville partout dans le monde. Vous pouvez afficher le temps, la température, l&rsquo;humidité et la force du vent. Il est possible également de voir une prévision (moins détaillée) sur 2 jours. Ce plugin WordPress gratuit utilise l&rsquo;API et les données mise à disposition par Yahoo!  
<img src="http://www.bygga.fr/wp-content/uploads/2013/02/meteo.jpg" alt="Exemple de météo offerte par le plugin" width="276" height="321" class="size-full wp-image-675" />


### Installation du plugin

Pour afficher la météo, donc, rien de plus simple. Installer le plugin <a href="http://wordpress.org/extend/plugins/weather-layer/" title="Télécharger weather layer" target="_blank">Weather Layer</a> depuis votre tableau de bord WordPress sous la rubrique extensions.  
Vérifiez qu’il s’agit bien du plugin par Morgan Fabre (un français !).

### Configuration

Une fois installé, rendez-vous sur le panneau de configuration du plugin, accessible depuis : Extensions > Weather Layer.  
Vous pouvez choisir la langue à utiliser (disponible en Français, anglais, etc&#8230;) et si la température sera en celsius ou Fahrenheit. Pour encore plus de personnalisation, vous pouvez choisir comment la ville et le pays seront affiché. Par défaut le style est : Ville (Pays). Mais on peut imaginer facilement ne mettre que la ville par exemple.

Avec seulement trois options disponibles il est donc très facile de mettre en place ce plugin Météo. La dernière étape consiste à insérer un shortcode à l&rsquo;endroit où vous voulez afficher votre code.

### Utilisation dans le contenu

Si vous voulez afficher la météo de Marne la vallée dans votre article sur DisneyLand, vous devez écrire le code suivant dans directement dans l&rsquo;éditeur de l&rsquo;article en question.

<pre class="language-html"><code>&#091; weatherlayer country="France" city="Paris" &#093;</code></pre>

### Utilisation dans un widget

Il est aussi possible d&rsquo;afficher la météo dans une sidebar de votre site. Cela fonctionne très bien si vous avez besoin d&rsquo;afficher la météo sur l&rsquo;ensemble des pages de votre site. Cette fois ci, il ne faut pas utiliser un shortcode mais un widget.  
Rendez-vous donc dans Apparence > Widgets et déplacez le widget &laquo;&nbsp;Weather Layer&nbsp;&raquo; dans le bloc sidebar.  
Vous pouvez ensuite choisir le pays et la ville dont vous souhaitez afficher la météo.  


<img src="http://www.bygga.fr/wp-content/uploads/2013/02/widget.jpg" alt="Utilisation du Widget" width="266" height="187" class="size-full wp-image-674" />

[2]: http://www.bygga.fr/comment-vendre-et-distribuer-un-ebook-avec-wordpress/ "Comment vendre et distribuer un ebook avec WordPress"