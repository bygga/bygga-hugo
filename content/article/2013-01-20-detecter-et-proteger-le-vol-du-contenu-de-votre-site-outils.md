---
title: 'Détecter et protéger le vol du contenu de votre site'
description: Voici comment détecter le plagiat et vous en protéger.
author: Simon
date: 2013-01-20
url: /detecter-et-proteger-le-vol-du-contenu-de-votre-site-outils/
categories: Securite
---
## Le plagiat touche tout le monde

C’est l’un des cauchemars de tous les blogueurs et éditeurs de site internet : se faire voler son contenu, ses articles, son idée, bref se faire plagier par un autre webmaster sans scrupules.  
Cette pratique est assez courante lorsque l’on a un site à succès et que l’on sort de l’anonymat de la toile. Si votre siteweb attire un bon nombre de visiteurs, se classe parmi le top 10 sur Google pour certains mots clef, je peux vous assurer que quelqu’un vous a déjà volé du contenu.

Il y a plein de raisons pour se faire voler du contenu, mais les deux principales sont les suivantes :

  * Attirer des visiteurs en publiant un article de qualité. Après tout votre article avait une bonne position sur Google.
  * Augmenter ses revenus publicitaires, ce qui finalement est sans doute le but ultime de tout webmaster.

Il est toujours frustrant de se faire voler un article ou une image. On passe beaucoup de temps à trouver du contenu original et à l’optimiser et par un simple copier-coller, un autre site peut se retrouver devant vous pour l’article en question.  
Voici donc une liste d’outil pour vérifier si votre site est victime de plagiat, par qui et surtout comment y remédier.

## Comment savoir si votre contenu est volé

### Utiliser un détecteur de contenu

<img src="http://www.bygga.fr/wp-content/uploads/2013/01/Copyscape.jpg" alt="Copyscape" width="524" height="212" class="size-full wp-image-509" />

  
La méthode la plus efficace pour vérifier si votre contenu et vos articles sont volés c’est d’utiliser un site comme <a href="http://www.copyscape.com/" title="Copyscape" target="_blank">Copyscape</a> qui permet de détecter le plagiat. Vous entrez du texte, votre article par exemple, et cet outil va automatiquement parcourir internet pour trouver du contenu identique ou bien semblable (si le webmaster a décidé de changer quelques phrases pensant vous tromper). 

Le seul souci avec cette technique c’est qu’il faut faire la recherche manuellement pour chaque article.

### Mettez des liens internes dans vos articles

En mettant dans chacun de vos articles un lien vers une autre page de votre site, vous pouvez quelque fois détecter le vol de contenu par un autre site. En effet si le voleur laisse vos liens intacts, vous allez pouvoir utiliser n’importe quel application disponible qui analyse les sites pointant vers votre site, backlink en anglais. Vous pouvez utiliser en autre : <a href= "http://www.google.com/webmasters/" title="Google Webmasters"> Google Webmaster tools</a>.  

Cette méthode ne fonctionne bien sûr que si le site copycat a gardé intact vos liens mais a l’avantage d’être automatique. Vous n’avez pas à chercher chacun de vos articles un à un.

### Utiliser Google Images pour vos graphismes

<img src="http://www.bygga.fr/wp-content/uploads/2013/01/Google-Images.jpg" alt="Google Images" width="600" height="269" class="aligncenter size-full wp-image-522" />  
Si vous êtes un photographe, dessinateur, auteur de BD et que vous mettez en ligne votre travail vous n’êtes pas à l’abris de voir quelqu’un voler vos images et photos. Le meilleur moyen pour s’en rendre compte c’est de faire une recherche inversée dans <a href="http://images.google.fr/" title="Google Images" target="_blank">Google Images</a> et choisissant non pas un mot clé comme recherche, mais en y mettant votre photo. Vous pouvez faire cela en cliquant sur l’appareil photo à droite de la barre de recherche.  
Google va vous remonter toutes les occurrences de votre image sur d’autre sites.

## Comment empêcher le vol de votre contenu

Il n’existe malheureusement pas de recette miracle. Si quelqu’un veut vous voler vos articles, il le fera. Mais vous pouvez lui rendre la vie plus compliqué.

### Empêcher le hotlink d’image

Faire du hotlink, en anglais, c’est afficher une image sur son site, mais qui est hébergée sur un autre site. C’est ce qui va arriver si vous vous faites voler un article et/ou une photo sans que le voleur ne change la source de l’image et la laisse en provenance de votre site.  
Pour éviter cela, et même ruser, vous pouvez modifier votre fichier <code>.htaccess</code> de la façon suivante :

<pre class="language-htaccess">
<code>RewriteEngine On
RewriteCond %{HTTP_REFERER} !^http://(.+\.)votresite\.com/ [NC]
RewriteCond %{HTTP_REFERER} !^$
RewriteRule .*\.(jpe?g|gif|bmp|png|jpg)$ /images/votreimage.jpe [L]</code>
</pre>

<img src="http://www.bygga.fr/wp-content/uploads/2013/01/hotlink-bygga.jpg" alt="Hotlink vers Bygga" width="600" height="150" class="aligncenter size-full wp-image-516" />  
Avec ce code, vous allez remplacer toutes vos photos qui sont affichée sur un autre site mais toujours hébergé sur votre serveur. Si vous créer une image votreimage.jpe (qui n&rsquo;est pas bloquée par le bout de code ci-dessus) qui affiche le message suivant : « Photo et article volés, voir l’original sur votresite.com », vous pouvez même espérer récupérer quelques visiteurs.

### Menacer le voleur

Vous pouvez bien sûr aussi prendre contact avec l’auteur du site pirate et lui demander de retirer le contenu en question, sinon vous l’attaquez en justice. Cette pratique peut en effrayer quelqu&rsquo;un et vous pouvez peut être réussir à les faire supprimer votre article volé. 

### Dénoncer le vol à Google

<img src="http://www.bygga.fr/wp-content/uploads/2013/01/Suppression-de-contenu-de-Google.jpg" alt="Suppression de contenu de Google" width="600" height="267" class="aligncenter size-full wp-image-523" />  
Si vous vous apercevez que le contenu de votre site internet est volé, vous pouvez dénoncer le site qui copie votre contenu à Google. Ils ont un formulaire pour ce type de demande. Personnellement je ne l&rsquo;ai jamais vraiment utilisé et je ne peux pas garantir que ça marche. L&rsquo;idée, plus que de prendre des décisions juridiques, c&rsquo;est plutôt de faire en sorte que Google supprime le contenu de ses résultats de recherches.  
Vous pouvez dénoncer quelqu&rsquo;un en utilisant ce <a href="http://support.google.com/bin/static.py?hl=fr&#038;ts=1114905&#038;page=ts.cs" title="Dénoncer vol de contenu" target="_blank">lien</a>.

### Limiter le texte dans vos flux RSS

<img src="http://www.bygga.fr/wp-content/uploads/2013/01/RSS.jpg" alt="Afficher l&#039;extrait RSS" width="392" height="77" class="aligncenter size-full wp-image-519" />  
L&rsquo;un des moyens les plus simple de voler le contenu d&rsquo;un site, c&rsquo;est de récupérer le flux RSS et le republier directement. C&rsquo;est automatique et prend donc que peut de temps pour le voleur de contenu.  
Pour éviter que cela ne se produise vous pouvez donc n&rsquo;afficher que les premières phrases de votre article dans votre flux et inviter vos lecteurs à continuer leur lecture directement sur votre site.  
Si vous utilisez WordPress, vous pouvez trouver cette option dans le menu : Réglages >&nbsp;Lecture