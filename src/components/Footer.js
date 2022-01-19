import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>
        Created with{' '}
        <span>
          {' '}
          <i class="fas fa-heart"></i>{' '}
        </span>
        by Beryl{' '}
        <span>
          <i class="far fa-copyright"></i>
        </span>{' '}
        {new Date().getFullYear()}.
      </p>
    </div>
  );
}

export default Footer;
