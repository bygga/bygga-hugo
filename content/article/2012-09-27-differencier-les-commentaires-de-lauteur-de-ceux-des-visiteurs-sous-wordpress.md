---
title: Différencier les commentaires de l’auteur de ceux des visiteurs sous WordPress
description: Voici comment mettre en avant les commentaires de l'admin dans WordPress
author: Simon
date: 2012-09-27
url: /differencier-les-commentaires-de-lauteur-de-ceux-des-visiteurs-sous-wordpress/
categories: Developpement Web
tags: WordPress
---
## Pourquoi personnaliser les commentaires de l'auteur

Il est souvent intéressant pour les visiteurs de pouvoir faire la distinction entre les commentaires de l’auteur d’un article ou bien de l’admin d’un site, de ceux des visiteurs.  

En mettant en valeur certain commentaire on améliore l’expérience des utilisateurs. **Par exemple un visiteur donnera plus d’importance dans un débat aux remarques de l’auteur de l’article.** Le visiteur pourra également se rendre compte si le débat est vivant en notant rapidement le nombre d’intervention de l’auteur.

Il existe plusieurs manières de mettre en avant les commentaires d’un utilisateur. On peut :

  * Donner une différente couleur aux commentaires de l’auteur
  * Ajouter une bordure aux commentaires de l’auteur
  * Ajouter un symbole à côté du nom de l’auteur
  * Ajouter un ruban au commentaire de l’auteur
  * …

## Modification de la classe du commentaire

La première chose à faire, quelque soit le <a href="http://www.bygga.fr/c/design/" title="Design WordPress" target="_blank">design</a> que vous voulez avoir pour le commentaire de l&rsquo;auteur est d&rsquo;indiquer qu&rsquo;il s&rsquo;agit du commentaire de l&rsquo;auteur. Rien de bien surprenant jusque là ! Ce qui est surprenant c&rsquo;est que c&rsquo;est super simple depuis une mise à jour récente de WordPress. Pas besoin de nombreuses lignes de code PHP pour faire cela.  
Ouvrez votre fichier <code>comment.php</code> et cherchez la ligne suivante :

<pre class="language-php">
<code>
// dans votre fichier comment.php.
&lt;?php wp_list_comments(array('callback' =&gt; 'comment_callback')); ?&gt;
</code>
</pre>

Identifiez le nom de la fonction après &lsquo;callback&rsquo;. Ici il s&rsquo;agit de &lsquo;<a href="https://codex.wordpress.org/Function_Reference/wp_list_comments" title="wp_list_comments" target="_blank">comment_callback</a>&lsquo;. Ca peut être différent pour vous.  
Rendez vous ensuite dans votre fichier <code>fonction.php</code> et chercher la fonction comment_callback (ou bien le nom de la fonction identifiée précédemment).  
Dans cette fonction allez sur la première balise <code>&lt;li&gt;</code> et ajoutez la fonction <code>comment_class()</code> comme ceci :

<pre class="language-php">
<code>
// dans votre fonction comment_callback
function comment_callback( $comment, $args, $depth ) {
?&gt;
	&lt;li &lt;?php comment_class(); ?&gt; id="comment-&lt;?php comment_ID(); ?&gt;"&gt;
		&lt;div class="comment-wrapper clearfix"&gt;
...
</code>
</pre>

<a href="http://codex.wordpress.org/Function_Reference/comment_class" title="Fonction comment_class" target="_blank">comment_class()</a> va automatiquement créer la classe class=&nbsp;&raquo;bypostauthor&nbsp;&raquo; si l&rsquo;auteur du commentaire est aussi l&rsquo;auteur de l&rsquo;article. Exactement ce qu&rsquo;il nous faut.

## Exemple 1 : Changer la couleur du commentaire de l’auteur

Pour cette exemple nous allons changer la couleur du background du commentaire. S’il s’agit d’un commentaire provenant d’un visiteur la couleur sera blanche. S’il s’agit d’un commentaire de l’auteur de l’article, la couleur de son commentaire sera grise.  
Une fois la modification faite dans votre fonction &lsquo;callback&rsquo; vous allez pouvoir modifier le style du commentaire dans le fichier de style de votre site, souvent appelé <code>style.css</code>.  
Ajoutez le code suivant pour avoir un fond gris lorsque l&rsquo;auteur commente.

<pre class="language-css">
<code>
.bypostauthor{ 
	background: #BDBDBD !important;
}
</code>
</pre>

## Exemple 2 : Ajouter une bordure au commentaire

Cette fois on voudrait ajouter une bordure rouge aux commentaires de l&rsquo;auteur de l&rsquo;article. Pour ca ajouter le code suivant au fichier <code>style.css</code>.

<pre class="language-css">
<code>
.bypostauthor{ 
	border:2px solid red !important;
}
</code>
</pre>

Laissez votre imagination travailler pour styler les commentaires de l&rsquo;auteur comme vous voulez. Laissez nous votre site en commentaire et on ira voir comment vous avez stylé vos commentaires !