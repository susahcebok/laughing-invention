* {
outline: 0 !important;
}
.custom-modal {
position: fixed;
overflow: auto;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: rgb(0 0 0 / 60%);
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 30px;
}
.custom-modal-dialog {
max-width: 620px;
width: 100%;
border-radius: 0px;
position: relative;
}
.custom-modal-content {
background: #ffffff;
padding: 30px 30px;
border-radius: 10px;
}
.close-modal {
position: absolute;
top: -10px;
right: -10px;
width: 30px;
height: 30px;
background: #f56142;
opacity: 1;
color: #ffffff;
border-radius: 100%;
border: 2px solid #ffffff;
z-index: 9;
box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 8%);
padding: 0;
text-align: center;
line-height: 30px;
cursor: pointer;
}
.custom-modal {
opacity: 0;
visibility: hidden;
}
body.modal-open .custom-modal {
opacity: 1;
visibility: visible;
}
.custom-modal .custom-modal-dialog{
-webkit-transform: scale(0);
-moz-transform: scale(0);
-ms-transform: scale(0);
-o-transform: scale(0);
transform: scale(0);
}
body.modal-open .custom-modal .custom-modal-dialog {
-webkit-transform: scale(1);
-moz-transform: scale(1);
-ms-transform: scale(1);
-o-transform: scale(1);
transform: scale(1);
}
.custom-modal, body .custom-modal, body.modal-open .custom-modal .custom-modal-dialog, body .custom-modal .custom-modal-dialog{
-webkit-transition: all 0.5s;
-moz-transition: all 0.5s;
-ms-transition: all 0.5s;
-o-transition: all 0.5s;
transition: all 0.5s;
}
@media (max-width: 575.98px) {}
