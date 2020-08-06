<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .flex-row {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            }
        .flex-col {
            max-height: 100%;
        }
        .flex-center {
            margin: 0 auto;
        }
        .nav {
            width: 100%;
            position: relative;
            display: inline-block;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            -ms-flex-align: center;
            align-items: center;
        }
        .nav li a i {
            vertical-align: middle;
            transition: color .3s;
            font-size: 20px;
        }
        .nav li:first-child {
            margin-left: 0 !important;
        }
        .nav li {
            padding: 0 1.5em;
            list-style-type: none;
        }
        .fixed-header{
            width: 100%;
            position: absolute;
            background: #111111;
            padding: 10px 0;
            color: #fff;
            top: 0;
        }
        .text-menu {
            font-weight: bold;
            color:#FF6600;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="flex-row fixed-header">
        <div class="flex-col flex-center">
            <ul class="nav">
                <li><a href="#" class = "text-menu">TRANG CHỦ</a></li>
                <li><a href="#" class = "text-menu">GIỚI THIỆU</a></li>
                <li><a href="#" class = "text-menu">CỬA HÀNG</a></li>
                <li><a href="#" class = "text-menu">TIN TỨC</a></li>
                <li><a href="#" class = "text-menu">LIÊN HỆ</a></li>
            </ul>
        </div>
  </div>
</body>
</html>
