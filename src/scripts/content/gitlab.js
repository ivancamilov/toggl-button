/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/

'use strict';

togglbutton.render('.issue-details .detail-page-description:not(.toggl)', {observe: true}, function (elem) {
  var link, description,
    numElem = $(".identifier") || $(".breadcrumbs-list li:last-child .breadcrumbs-sub-title"),
    titleElem = $(".title", elem),
    projectElem = $(".title .project-item-select-holder") || $(".breadcrumbs-list li:nth-last-child(3) .breadcrumb-item-text");
  description = titleElem.textContent.trim();
  if (numElem !== null) {
    description = numElem.textContent.split(" ").pop().trim() + " " + description;
  }

  link = togglbutton.createTimerLink({
    className: 'gitlab',
    description: description,
    projectName: projectElem.textContent
  });

  $(".detail-page-header").appendChild(link);
});

togglbutton.render('.merge-request-details .detail-page-description:not(.toggl)', {observe: true}, function (elem) {
  var link, description,
    numElem = $(".identifier") || $(".breadcrumbs-list li:last-child .breadcrumbs-sub-title"),
    titleElem = $(".title", elem),
    projectElem = $(".title .project-item-select-holder") || $(".breadcrumbs-list li:nth-last-child(3) .breadcrumb-item-text");

  description = titleElem.textContent.trim();

  if (numElem !== null) {
    description = "MR" + numElem.textContent.split(" ").pop().trim().replace("!", "") + "::" + description;
  }

  link = togglbutton.createTimerLink({
    className: 'gitlab',
    description: description,
    projectName: projectElem.textContent
  });

  $(".detail-page-header").appendChild(link);
});

