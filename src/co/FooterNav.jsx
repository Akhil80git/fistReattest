import React from 'react';
import './FooterNav.css';

export default function FooterNav({ onNavigate, onDownload }) {
  return (
    <footer className="footer-nav">
      <a onClick={() => onNavigate('/dashboard')}><i className="fas fa-tachometer-alt"></i></a>
      <a onClick={() => onNavigate('/orders')}><i className="fas fa-shopping-bag"></i></a>
      <a onClick={() => onNavigate('/messages')}><i className="fas fa-envelope"></i></a>
      <a onClick={() => onNavigate('/settings')}><i className="fas fa-cog"></i></a>
      <a onClick={onDownload}><i className="fas fa-download"></i></a>
    </footer>
  );
}
