import { useEffect, useState } from 'react';
import { marked } from 'marked';
import TextBlog from '../../markdown/TextBlog.md';
import './blog.scss';

function Blog() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(TextBlog)
      .then((response) => response.text())
      .then((text) => {
        setContent(marked(text));
      });

    const shareButton = document.getElementById('shareButton');
    if (shareButton) {
      const handleShareClick = (event) => {
        event.preventDefault();

        if (navigator.share) {
          navigator
            .share({
              title: 'Compartilhar',
              text: 'Compartilhe esse blog!',
              url: window.location.href,
            })
            .then(() => alert('Compartilhado com sucesso!'))
            .catch((error) => console.error('Erro ao compartilhar:', error));
        } else {
          alert('A API de Compartilhamento não é suportada neste navegador.');
        }
      };
      shareButton.addEventListener('click', handleShareClick);

      return () => {
        shareButton.removeEventListener('click', handleShareClick);
      };
    }
  }, []);

  const shareButton = document.getElementById('shareButton');

  shareButton.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: 'Confira este site Incrivel!',
          url: window.location.href,
        });
        console.log('Compartilhado com sucesso!');
      } catch (error) {
        console.log('Erro ao compartilhar:', error);
      }
    } else {
      alert('O recurso de compartilhamento não é suportado neste navegador.');
    }
  });

  return (
    <section className="flex">
      <div className="text" dangerouslySetInnerHTML={{ __html: content }}></div>
    </section>
  );
}

export default Blog;
