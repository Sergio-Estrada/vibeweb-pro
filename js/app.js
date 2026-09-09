// Navegación suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Cambiar clase activa en el nav al hacer scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Simular interacción con el asistente de IA
const aiSendButton = document.getElementById('ai-send-button');
const aiInputText = document.getElementById('ai-input-text');

aiSendButton.addEventListener('click', (e) => {
  e.preventDefault();
  const aiChat = document.querySelector('.ai-chat');

  if (aiInputText.value.trim() !== '') {
    // Mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'ai-message user';
    userMessage.innerHTML = `<p>${aiInputText.value}</p>`;
    aiChat.insertBefore(userMessage, aiChat.lastChild);

    // Respuesta simulada de IA
    setTimeout(() => {
      const aiResponse = document.createElement('div');
      aiResponse.className = 'ai-message';
      aiResponse.innerHTML = `
        <p>
          Respuesta de IA: <br>
          "Para tu proyecto, te recomiendo usar un <strong>layout Bento Grid</strong> con una <strong>paleta de colores neón</strong>. <br>
          Aquí tienes un ejemplo de código para empezar: <br>
          <code style="background: #2A2A2A; padding: 5px; border-radius: 5px; display: block; margin-top: 10px;">
            .bento-grid { <br>
              display: grid; <br>
              grid-template-columns: repeat(3, 1fr); <br>
              gap: 10px; <br>
              background: linear-gradient(135deg, #FF2D75, #00F5FF); <br>
            }
          </code>
        </p>
      `;
      aiChat.insertBefore(aiResponse, aiChat.lastChild);
      aiInputText.value = '';
    }, 1000);
  }
});

// Añadir nuevo proyecto (simulación)
document.querySelector('.new-project').addEventListener('click', () => {
  alert('¡Nuevo proyecto creado! (Funcionalidad en desarrollo)');
});
