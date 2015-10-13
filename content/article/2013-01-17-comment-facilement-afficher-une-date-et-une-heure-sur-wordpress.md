---
title: Comment facilement afficher une date et une heure sur WordPress
description: Code pour afficher la daye et l'heure sur votre thème WordPress sans plugin.
author: Simon
date: 2013-01-17
url: /comment-facilement-afficher-une-date-et-une-heure-sur-wordpress/
categories: Développement Web
tags: WordPress
---
Voici une petite astuce qui permet d&rsquo;afficher facilement et rapidement une sous WordPress sans connaissance en PHP ou autres languages.

Vous pouvez afficher au choix la date et l&rsquo;heure actuelle ou la date de mise en ligne d&rsquo;un article.

## Date et heure actuelle

La solution ne prend qu&rsquo;une seule ligne et vous devez la copier telle quelle à l&rsquo;endroit où vous voulez que la date soit affichée.

Pour afficher la date actuelle telle que définie dans votre tableau de bord > Réglages >&nbsp;Général, on va utiliser la fonction php <code><a href="http://php.net/manual/fr/function.date.php" title="date PHP" target="_blank">date()</a></code>

<pre class="language-php">
<code>&lt;?php echo date(get_option('date_format')); ?&gt;</code>
</pre>

Pour afficher l&rsquo;heure actuelle telle que définie dans votre tableau de bord > Réglages >&nbsp;Général

<pre class="language-php"><code>&lt;?php echo date(get_option('time_format')); ?&gt;</code></pre>

## Date de mise en ligne d&rsquo;une article.

Voici maintenant comment afficher la date à laquelle un article a été mis en ligne. Vous avez deux choix possible :  
Une date absolue, classique qui vous donne comme résultat par exemple : 17 janvier 2013.  
Code à insérer au sein de la boucle WordPress, par exemple dans votre fichier <code>single.php</code>

<pre class="language-php"><code>&lt;p&gt;Date de publication : &lt;?php the_date(); ?&gt;&lt;/p&gt;</code></pre>

Documentation sur la fonction <a href="http://codex.wordpress.org/fr:Marqueurs_de_Modele/the_date" title="the_date WordPress" target="_blank">ici</a>.

Ou bien vous pouvez afficher une date relative, par rapport à l&rsquo;instant présent (comme sur Facebook, Twitter, etc&#8230;) du type : il y a 15 jours.  
Code à insérer au sein de la boucle WordPress, par exemple dans votre fichier <code>single.php</code>

<pre class="language-php">
<code>&lt;p&gt;Article mise en ligne il y a : &lt;?php echo human_time_diff( get_the_time('U'), current_time('timestamp') ); ?&gt;&lt;/p&gt;</code>
</pre>

Note : Si vous voulez faire de même pour un commentaire au lieu d&rsquo;un article vous pouvez remplacer la fonction <code>get\_the\_time()</code> par la fonction <code>get\_comment\_time()</code>. Ce qui donne :

<pre class="language-php">
<code>&lt;p&gt;Commentaire écrit il y a : &lt;?php echo human_time_diff( get_comment_time('U'), current_time('timestamp') ); ?&gt;&lt;/p&gt;</code>
</pre>