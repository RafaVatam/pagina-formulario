<script>
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "senha") {
    x.type = "text";
  } else {
    x.type = "confirmesuasenha";
  }
}