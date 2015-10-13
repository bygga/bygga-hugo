---
title: Ajouter facilement une table des matières dans WordPress
description: Voici comment ajouter une table des matières avec un plugin WordPress
author: Simon
date: 2013-02-15
url: /ajouter-facilement-table-matieres-wordpress/
categories: Développement Web
tags: WordPress
---
## Une table des matières comme Wikipedia

<div id="attachment_633" style="width: 610px" class="wp-caption aligncenter">
  <img src="http://www.bygga.fr/wp-content/uploads/2013/01/Sommaire.jpg" alt="Sommaire de Wikipedia" width="600" height="361" class="size-full wp-image-633" />
  
  <p class="wp-caption-text">
    Sommaire sur Wikipedia
  </p>
</div>

  


<div id="attachment_641" style="width: 610px" class="wp-caption aligncenter">
  <img src="http://www.bygga.fr/wp-content/uploads/2013/01/sommaire-bygga.jpg" alt="Sommaire sur Bygga avec le Plugin" width="600" height="272" class="size-full wp-image-641" />
  
  <p class="wp-caption-text">
    Sommaire sur Bygga avec le Plugin
  </p>
</div>

  
Lorsque vous écrivez de longs articles qui contiennent plusieurs chapitres il est intéressant de pouvoir ajouter une table des matières (sommaire) au début de votre article.  
Wikipedia est un exemple de site web qui utilise une table des matières pour faciliter la navigation au sein de ses articles. Il appellent ca aussi un sommaire.

Il est bien sûr possible de créer cette table manuellement en prenant les titres de vos chapitres et en faisant un lien vers ceux-ci. Mais l’opération est longue et pas toujours facile en maintenance lorsque vous faites une mise à jour du contenu.

Heureusement il existe un [plugin WordPress][1] très pratique pour ajouter facilement une table des matières. La table est générée automatiquement et mise à jour en même temps que votre article est mis à jour.  
Vous pouvez choisir d’insérer la table des matières automatiquement ou bien avec un shortcode pour encore plus de personnalisation.

## Installation et configuration du plugin WordPress

### Installer Table of Contents Plus

<div id="attachment_632" style="width: 556px" class="wp-caption aligncenter">
  <img src="http://www.bygga.fr/wp-content/uploads/2013/01/installer.jpg" alt="Installer Table of Contents Plus" width="546" height="242" class="size-full wp-image-632" />
  
  <p class="wp-caption-text">
    Installer Table of Contents Plus
  </p>
</div>

  
Rendez-vous sur la page d’installation de plugins WordPress accessible depuis le chemin admin > Extensions > Ajouter  
Recherchez le plugin <a href="http://wordpress.org/extend/plugins/table-of-contents-plus/" title="Table of Contents Plus sur WordPress" target="_blank">Table of Contents Plus</a> par Michael Tran et cliquez sur installer. Ce plugin est complètement gratuit.  
Une fois le plugin installé vous aller devoir le configurer sur la page Admin >&nbsp;Réglages > TOC+

### Configurer la table des matières

L’intérêt de ce plugin c’est que vous pouvez facilement configurer le contenu et l’aspect de la table des matières.  
Parmi les options les plus importantes vous pouvez noter les suivantes :

  * Possibilité de choisir l’en tête de la table à afficher. Vous pouvez nommer cela &laquo;&nbsp;Sommaire&nbsp;&raquo; par exemple.
  * Possibilité d’inclure la table que dans les articles « longs », avec suffisamment de titres. Note : Vous pouvez mettre une très grande valeur pour afficher manuellement la table avec un shotcode plutôt qu’automatiquement. (ou utiliser &#091;no_toc&#093;)
  * Possibilité de choisir l’emplacement d&rsquo;affichage de la table.
  * Le style (couleur, etc&#8230;) est personnalisable également.
  * Empêcher l&rsquo;affichage sur certaine page, post type

### Insérez la table avec un shotcode

Si vous choisissez d’insérer la table manuellement dans vos articles, vous devez utiliser le code suivant et le copier dans le contenu de votre article de la manière suivante : &#091;toc&#093;  


<div id="attachment_638" style="width: 610px" class="wp-caption aligncenter">
  <img src="http://www.bygga.fr/wp-content/uploads/2013/01/toc.jpg" alt="Insertion du shortcode" width="600" height="231" class="size-full wp-image-638" />
  
  <p class="wp-caption-text">
    Insertion du shortcode
  </p>
</div>

  
Vous pouvez ensuite admirer le résultat !  
Pour chacun de vos titres, un lien vers la section correspondante de votre article est créé automatiquement. Si vous ajoutez un titre supplémentaire, il sera automatiquement ajouté à la table sans action supplémentaire de votre part.

[1]: http://www.bygga.fr/c/code-et-plugins/plugins-wordpress/ "plugin WordPress"
