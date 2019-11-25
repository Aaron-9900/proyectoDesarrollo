const foot = () => ` 
<div class="container-fluid">
  <div class="row" style="text-align:center;">
    <div class="col-md-4">
      <a class="fb-ic">
        <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
    </div>

    <div class="col-md-4">
      <a class="tw-ic">
        <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
    </div>

    <div class="col-md-4">
      <a class="ins-ic">
        <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
      </a>
    </div>
  </div>
  <div class="text-center py-3">
    Llámanos!
    <i class="fas fa-phone"></i>
    <span id="phoneNumber">+34 699682030</span>
  </div>
  <div class="footer-copyright text-center py-3">
    © 2019 Copyright:
    <a href="#"> AlpacaLove.com</a>
  </div>
</div>
`;

function buildFooter() {
  let ft = document.getElementsByTagName("footer")[0];
  let div = document.createElement("div");
  div.innerHTML = foot();
  ft.appendChild(div);
  // Change this to div.childNodes to support multiple top-level nodes
}

buildFooter();
