---
title: Comment afficher les sous-catégories dans WordPress
description: Voici comment afficher les catégorie et sous-catégories de vos articles sur la plateforme WordPress
author: Simon
date: 2015-12-15
url: /afficher-sous-categorie-wordpress/
categories: Developpement Web
tags: WordPress
---
<img src="/assets/img/articles/afficher-sous-categories-wordpress.png" class="aligncenter" />
## La différence entre catégorie et mots-clef
Il y a deux façons sous WordPress de d'organiser vos articles. Vous pouvez dire qu'ils appartiennent à une catégorie ou bien qu'ils ont des mots-clef.

Il est important de bien [comprendre la différence](http://wpformation.com/anatomie-articlepage-wordpress/) entre les deux pour pouvoir en tirer le meilleur. 

La différence principale entre catégorie et mots-clé c'est que les catégories peuvent avoir des enfants, des sous catégories. Les mots clé, eux, ont tous le même niveau d'organisation.

Souvent un article possède une seule catégorie et/ou sous-catégorie et plusieurs mot-clés.

## Comment donner une catégorie et sous-catégorie à vos articles ?
Quand vous rédigez vos articles, vous pouvez choisir une catégorie existante en la sélectionnant directement dans l'interface sur la droite de votre écran comme le montre la photo ci-dessous.

<img src="/assets/img/articles/selectionner-categorie.jpg" class="aligncenter" />

Les sous-catégories s'affichent avec un alinéa sous la catégorie mère. A noté que vous n'êtes pas obligé de sélectionner la catégorie mère quand vous choisissez un sous-catégorie. 

Si vous ne le faite pas, votre article apparaitra uniquement sur la page d'archive de la sous-catégorie.

## Créer une sous-catégorie
Pour créer une catégorie ou sous-catégorie, vous pouvez cliquer sur *+Ajouter un nouvelle catégorie*.
Vous pouvez ensuite entrer le nom de la nouvelle catégorie et si c'est le cas, le nom de la catégorie parente.

<img src="/assets/img/articles/ajouter-categorie.jpg" class="aligncenter" />

Dans ce cas, *Cérémonie* est une sous-catégorie de *Mariage*, au même titre que *Préparatifs* qui existait déjà.
Vous pouvez aussi continuer votre segmentatio en ajoutant une sous-sous-catégorie et ainsi de suite.

## Afficher les catégories avec un Widget dans votre sidebar
La manière la plus simple pour les débutants [WordPress](/tags/wordpress/) d'afficher une sous-catégorie c'est d'utiliser les Widgets.
Vous pouvez les trouver dans le menu de gauche sous la catégorie "Apparence". 
Tout les thèmes et toutes les installations WordPress ont par défaut ce Widgets. Vous n'avez donc pas besoin d'installer une extension supplémentaire.

<img src="/assets/img/articles/afficher-categorie.jpg" class="aligncenter" />

Faitez glisser le widget *Catégorie* dans votre sidebar. Vous pouvez ensuite ajouter un titre et sélectionner parmi 3 options.
La première vous permet de choisir si vous voulez afficher vos catégories comme une liste dans un menu déroulant ou bien sans. L'option menu-déroulant est un bon choix si vous avez beaucoup de catégorie. Pensez à vos pauvres utilisateurs sur leur téléphone.

La seconde option vous permet d'afficher le nombre d'articles attachés à une catégorie. Je ne vois pas forcement un grand intérêt, mais certaines personne l'utilise. 

La troisièment option est celle qui nous intéresse. *Afficher la hiérarchie* permet d'afficher les catégories et leur sous-catégories.

## Afficher les articles d'une catégories dans un article ou une page
Si vous voulez afficher une liste de tout vos articles dans une certaine catégorie au sein même de vos pages ou de vos articles, vous pouvez le faire grâce à un très bon plugin.

Je vous conseille le plugin [List category posts](https://fr.wordpress.org/plugins/list-category-posts/). 

<img src="/assets/img/articles/list-category-posts.jpg" class="aligncenter" />

Avec ce plugin, vous allez pouvoir utiliser un shortcode à insérer directement dans le texte de votre article ou de votre page. Ce shortcode va ensuite afficher automatiquement tous les articles au sein de cette catégorie. Le plugin comporte pleins d'options. Je vous laisse les découvrir sur la page l'extension.

<img src="/assets/img/articles/article-dans-categorie.jpg" class="aligncenter" />

## Afficher les catégories sans plugin ou widget
Pour ceux qui sont à l'aise avec WordPress et n'ont pas peur de modifier le code PHP de votre thème, vous pouvez choisir d'ajouter le code suivant dans le ficher dans lequel vous voulez afficher les catégories :

```php
<?php wp_list_categories( ); ?> 
```
Là aussi, vous avez le choix parmi pleins d'options. Vous pouvez par exemple décider de l'ordre d'affichage des catégories (par défaut cela se fait par ordre alphabétique). Pratique pour mettre en avant les catégories avec le plus d'article en avant.

Vous pouvez choisir aussi d'afficher ou non les sous-catégories ou bien les catégories vides.