const btn = document.getElementById('btn');
const text = document.getElementById('text');

//ボタンがクリックされた時に実行される
btn.addEventListener('click', () => {
  //2秒の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {

    //id="text"の文章を書き換える
    text.textContent = 'ボタンをクリックしました';

  },2000);
});