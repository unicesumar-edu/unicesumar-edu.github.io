// document.getElementById('studentForm').addEventListener('submit', function(event) {
//   document.body.style.display = 'flexbox';
//   event.preventDefault();
//   document.getElementById('cardName').textContent = document.getElementById('name').value.toUpperCase();
//   document.getElementById('cardCourse').textContent = document.getElementById('course').value.toUpperCase();
//   document.getElementById('cardRA').textContent = document.getElementById('ra').value;
//   document.getElementById('cardCPF').textContent = document.getElementById('cpf').value;
//   document.getElementById('cardRG').textContent = document.getElementById('rg').value;
//   document.getElementById('cardBD').textContent = formatDateDayMonthYear(document.getElementById('cardBirthdate').value);
//   document.getElementById('card').style.display = 'block';
//   document.getElementById('studentForm').style.display = 'none';
//   document.querySelector('.container').style.maxWidth = '650px';
//   document.querySelector('.container').style.minWidth = '650px';
// // Função para formatar data para string no formato dia-mês-ano
// function formatDateDayMonthYear(date) {
//   const data = new Date(date)
//   const dia = String(data.getDate() + 1).padStart(2, '0')
//   const mes = String(data.getMonth() + 1).padStart(2, '0')
//   const ano = data.getFullYear()
//   if (date == '') {
//       return ''
//   } else {
//       return `${dia}/${mes}/${ano}`
//   }
// }
// });

document.getElementById('studentForm').addEventListener('submit', function(event) {
  
  event.preventDefault();
  document.body.style.display = 'inline-block';
  
  document.getElementById('cardName').textContent = document.getElementById('name').value.toUpperCase();
  document.getElementById('cardCourse').textContent = document.getElementById('course').value.toUpperCase();
  document.getElementById('cardRA').textContent = document.getElementById('ra').value;
  document.getElementById('cardCPF').textContent = document.getElementById('cpf').value;
  document.getElementById('cardRG').textContent = document.getElementById('rg').value;
  document.getElementById('cardBD').textContent = formatDateDayMonthYear(document.getElementById('cardBirthdate').value);
  document.getElementById('card').style.display = 'block';
  document.getElementById('studentForm').style.display = 'none';
  document.querySelector('.container').style.maxWidth = '650px';
  document.querySelector('.container').style.minWidth = '650px';
  // document.querySelector('.container').style.maxHeight = '350px';
  document.querySelector('.container').style.minHeight = '400px';
  document.querySelector('.container').style.height = '400px'

  // Mostrar o botão de impressão
  // document.getElementById('printButton').style.display = 'block';

  // Não mostrar o botão de impressão
  document.getElementById('printButton').style.display = 'none';
});

// Função para formatar data para string no formato dia-mês-ano
function formatDateDayMonthYear(date) {
  const data = new Date(date);
  const dia = String(data.getDate() + 1).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  if (date == '') {
      return '';
  } else {
      return `${dia}/${mes}/${ano}`;
  }
}
