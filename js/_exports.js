import { getCookie } from "./util.js";

export const termBody = document.getElementById('termBody');
export const linesEl = document.getElementById('lines');
export const typedEl = document.getElementById('typed');
export const cursorEl = document.getElementById('cursor');
export const input = document.getElementById('hiddenInput');
export const terminalEl = document.getElementById('terminal');
export const titlebarEl = document.getElementById('titlebar');
export const notifEl = document.getElementById('notification');
export const notifApp = document.getElementById('notifApp');
export const notifTitle = document.getElementById('notifTitle');
export const notifText = document.getElementById('notifText');
export const notifClose = document.getElementById('notifClose');
export const tbUserEl = document.getElementById('tbUser');
export const promptUserEl = document.getElementById('promptUser');
export const DEVELOPER_NAME = 'cholasimmons';
export const USERNAME_COOKIE = 'zt_username';
export const DEFAULT_USERNAME = 'user';
export const FACEBOOK_URL = 'https://www.facebook.com/groups/1421088291504611/';

export var currentUsername = getCookie(USERNAME_COOKIE) || DEFAULT_USERNAME;

