---
title: 'Limiter l’accès à un article aux utilisateurs enregistrés [WordPress]'
description: Voici comment mettre en place un systeme d'abonnement pour lire vos articles sous WordPress
author: Simon
date: 2012-09-15
url: /limiter-lacces-a-un-article-aux-utilisateurs-enregistre-wordpress/
categories: Développement Web
tags: WordPress
---
## Un systeme d'abonnement pour votre site WordPress

Voici une petite astuce très simple mais qui peut vous sauver la vie si votre site internet en a besoin.  
Je vais vous montrer comment limiter l’accès à une partie de votre site internet aux utilisateurs enregistrés ou connectés. Cela peut être un article, une catégorie, une page, etc…  
Cette astuce s’adresse aux sites internet qui propose du contenu unique pour leurs membres. Par exemple seuls les membres du site de votre groupe de musique peuvent écouter votre dernier single, les autres doivent attendre un mois.

La difficulté pour ce tutorial est très faible ! Donc à vos claviers.

## Limiter l’accès à une page

Remplacez le code suivant dans <code>page.php</code>

<pre class="language-php">
<code>
&lt;?php the_content(); ?&gt;
</code>
</pre>

par le code suivant

<pre class="language-php">
<code>
&lt;?php
if ( is_user_logged_in() ) {
    the_content();
} else {
    echo 'vous devez &ecirc;tre connect&eacute; pour voir cette page';
}
?&gt;
</code>
</pre>

## Limiter l’accès à un article particulier

Remplacez le code suivant dans <code>single.php</code>

<pre class="language-php">
<code>
&lt;?php the_content(); ?&gt;
</code>
</pre>

par

<pre class="language-php">
<code>
&lt;?php
/* remplacer 512 par l'ID de l'article concerné */
if ( !is_user_logged_in() && get_the_ID()==512 ) {   
    echo 'vous devez &ecirc;tre connect&eacute; pour voir cette article';
} else {
     the_content();
}
?&gt;
</code>
</pre>

## Limiter l’accès à une catégorie

Remplacez le code suivant dans <code>category.php</code>

<pre class="language-php">
<code>
&lt;?php the_content(); ?&gt;
</code>
</pre>

par le code suivant

<pre class="language-php">
<code>
&lt;?php
if ( is_user_logged_in() ) {
    the_content();
} else {
    echo 'vous devez &ecirc;tre connect&eacute; pour voir cette categorie';
}
?&gt;
</code>
</pre>