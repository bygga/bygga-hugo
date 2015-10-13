---
title: Comment traduire un thème WordPress en francais
description: Une explication toute simple sur comment traduire un thème WordPress dans la langue de Molière, le français.
author: Simon
date: 2012-07-24
img: /img/traduire-wordpress-francais.png
url: /comment-traduire-un-theme-wordpress-en-francais/
categories: Développement Web
tags: WordPress
---
## L'anglais reste la langue principale des développeurs
Bien que la communauté francophone sur WordPress soit importante, tous les thèmes ne sont pas forcement traduits en français.  
Cela est notamment vrai pour les thèmes gratuits qui sont souvent disponible uniquement en anglais.  
Certain thèmes professionnels sont en revanche déjà disponible en français ce qui va faciliter votre développement. Choisissez donc ces thèmes en priorité, surtout si l&rsquo;anglais est loin d&rsquo;être votre point fort.

Il existe comme souvent deux manières d&rsquo;arriver à nos fins :

  * Modifier le code à la main
  * Utiliser un plugin

Le plus facile étant comme souvent d&rsquo;utiliser un plugin, je vais vous montrer comment traduire votre thème WordPress en français de cette manière. Notre sauveur s&rsquo;appelle donc : <a href="http://wordpress.org/extend/plugins/codestyling-localization/" title="Codestyling Localization" target="_blank">Codestyling Localization</a>

## Installez le plugin *codestyling localization*

<img src="http://www.bygga.fr/wp-content/uploads/2012/07/traduire-wordpress-1-e1342114023148.png" alt="Installer Codestyling Localization" title="installer-codestyling-localization" width="600" height="217" class="aligncenter size-full wp-image-8" />

  * Rendez vous dans l&rsquo;onglet <code>Extensions &#8211; Ajouter</code> dans le tableau de bord de votre site sous WordPress.
  * Dans le champ de recherche tapez &laquo;&nbsp;codestyling localization&nbsp;&raquo; puis installer le plugin de ce nom. Activez ensuite l&rsquo;extension.

## Ajouter une langue

  * Pour lancer &laquo;&nbsp;Codestyling Localization&nbsp;&raquo; rendez vous dans <code>Outils &#8211;Localization</code>. 
  * Choisissez ensuite le fichier que vous voulez traduire : Thèmes, extensions, etc&#8230;  
    Dans notre cas, il s'agit du thème WordPress que vous souhaitez traduire en français.
  * Cliquez ensuite sur <code>Ajouter une nouvelle langue</code>

<img src="http://www.bygga.fr/wp-content/uploads/2012/07/traduire-wordpress-2.png" alt="Ajouter une nouvelle langue" title="traduire-wordpress-2" width="590" height="96" class="aligncenter size-full wp-image-20" />

  * Dans le menu qui s&rsquo;affiche, choisissez fr_FR (ou bien la variante Suisse ou Belge selon votre choix). Puis cliquez sur <code>créer le .po</code>

<img src="http://www.bygga.fr/wp-content/uploads/2012/07/traduire-wordpress-3.png" alt="Choisir fr_FR" title="traduire-wordpress-3" width="532" height="500" class="aligncenter size-full wp-image-21" />

  * Sur la nouvelle ligne créée (celle qui correspond à votre langue) choisissez <code>Rescanner</code> puis <code>Scanner maintenant</code> dans la fenêtre qui s&rsquo;affiche

## Traduire votre Thème WordPress en Francais

  * Cliquez sur <code>modifier</code> sur la ligne qui correspond à votre langage pour commencer à traduire votre thème WordPress. Une liste des mots qui sont traduisibles sera affiché.
  * A coté de chaque mot ou phrase à traduire cliquer sur <code>modifier</code>.
  * Une fenêtre s&rsquo;ouvre. La partie du dessus correspond à la phrase en anglais telle qu&rsquo;elle apparaît dans votre thème. Ne la modifiez pas. Entrez plutôt la traduction en français dans la case du dessous puis cliquez sur <code>Save &#038; Next</code>

<img src="http://www.bygga.fr/wp-content/uploads/2012/07/traduire-wordpress-4.png" alt="Entrez la traduction en français" title="traduire-wordpress-4" width="581" height="383" class="aligncenter size-full wp-image-22" /> 

  * Une fois toutes les phrases traduite en francais, il ne vous reste plus qu&rsquo;a cliquer sur <code>Générer le fichier .mo</code>
  
<img src="http://www.bygga.fr/wp-content/uploads/2012/07/traduire-wordpress-5.png" alt="Générer le fichier .mo" title="traduire-wordpress-5" width="584" height="183" class="aligncenter size-full wp-image-24" /> </ul>