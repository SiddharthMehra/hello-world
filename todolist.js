<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

<script defer src="script.js"></script> href="style.css">
<script src=<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/js/all.min.js" integrity="sha512-F5QTlBqZlvuBEs9LQPqc1iZv2UMxcVXezbHzomzS6Df4MZMClge/8+gXrKw2fl5ysdk4rWjR0vKS7NNkfymaBQ==" crossorigin="anonymous"></script>
<link rel = "stylesheet"
</head>
<body>
 <div class= "container">
 <h1 align="center">todo list</h1>
  <div class="row">
	  <div class="col">
		<div class="form-group">
			<label for="inpnewtask">New Task</label>
			<input type="text" class="form-control" id="inpnewtask" aria-describedby="newtaskHelp" placeholder="Enter the task">
			<small id="newtaskHelp" class="form-text text-muted">a short line description of your text</small>
		  </div>
	  </div>
	</div>
	<!--buttons  -->
	  <div class="row" px-4>
		  <button class="btn btn-success col  m-2" id="btnAdd">
			  Add
		  </button>
		<button class="btn btn-danger col m-2" id="btnClear">
			Clear
		</button>
	</div>
	<!-- Task List -->

	<ul class="row list-group" id="ulTasks">
		<li class="list-group-item active">Cras justo odio</li>
		<li class="list-group-item">Dapibus ac facilisis in</li>
		<li class="list-group-item">Morbi leo risus</li>
		<li class="list-group-item">Porta ac consectetur ac</li>
		<li class="list-group-item">Vestibulum at eros</li>
	  </ul>
	  


 </div>
</body>	
</html>


