crumb.js
========

A simple, mini-library for handling cookies in JavaScript

* Crumb.get(name) => value
* Crumb.set(name[, value[, options]]) => true
** Omitting value will attempt to delete the cookie
** The `options` parameter supports expires (in number of days), path and domain

For more information about the options for Crumb.set, see the cookie RFC: https://www.ietf.org/rfc/rfc2109.txt at section 4.2.2
