<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$gwrgmLz0bYZN0VzTOpL`ykA:m4O+8XWNuQWeU</<1EhDFL6u~t|nRV,S,10+1FY' );
define( 'SECURE_AUTH_KEY',  'lx?A@v).]cRZ>{p;fG(/tjGgp5;[o9?A+pJy]d6j*Q?WGD {3>j[.+UBTpI_=8=P' );
define( 'LOGGED_IN_KEY',    '*YCAZ0$1-rt~Fjisr$j5)DRwo,RMo&lfc4r@K^/E+LVZqOK{f=a3[bFW`p1_ H7p' );
define( 'NONCE_KEY',        'yEcJm%%z!JK]$GBh<C.,YiX?:t*e5DVdE9 f/uk2C~I6l.Vp(I[)ImA>c*RxKsNl' );
define( 'AUTH_SALT',        ' loXqRrG^Lr>b~I1ROkmBjGD|Vsu(MC6crIX9;#d8ODrpg&pozC,kY8hZE0$;7dS' );
define( 'SECURE_AUTH_SALT', '~]y]hDTkP6G?2ze&S&ujzLbkH}Py<.i9)+H4F]mlcXw0sVg&VIwj^v`[Nlms743u' );
define( 'LOGGED_IN_SALT',   '|rVV+JIa0TO?ucH9wfsfKEZ(_jxPY/I],ozEa],s7&M4^/l/1t9ZxI4Xpu2m<Fn_' );
define( 'NONCE_SALT',       'ZPC6O{pbbf&9Oq$1`=F>555]1QMHljf7jq[_C4xFa4P5ec3ETCz6gUFwE.1_xJbX' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
