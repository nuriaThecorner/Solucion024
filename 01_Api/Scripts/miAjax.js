function miAjax(param) {
	var miTabla ="";
	var miTabla01 = 
	"   <table>" +                                                             
	"        <thead>" +                                           
	"           <tr>" +          
	"               <th>EmployeeID</th>" +
	"               <th>FirstName</th>" +
	"               <th>LastName</th>" +
	"               <th>Detail</th>" +
	"           </tr>" +
	"        </thead>" +
	"        <tbody>";  
	var miTabla02 = "";
	var miTabla03 = 
	"       </tbody>" +
	"   </table>";
	
	var miTablaDetalle = "";
	const opciones = {
	method :'GET'
	}
	//[{"EmployeeID":"1","LastName":"Davolio","FirstName":"Nancy","Title":"Sales Representative","TitleOfCourtesy":"Ms.","BirthDate":"1948-12-08 00:00:00","HireDate":"1992-05-01 00:00:00","Address":"507 - 20th Ave. E.Apt. 2A","City":"Seattle","Region":"WA","PostalCode":"98122","Country":"USA","HomePhone":"(206) 555-9857","Extension":"5467","Photo":null,"Notes":"Education includes a BA in psychology from Colorado State University in 1970. She also completed \"The Art of the Cold Call.\" Nancy is a member of Toastmasters International.","ReportsTo":"2","PhotoPath":"http:\/\/accweb\/emmployees\/davolio.bmp","Salary":"2954.55"},
	if (param == null || param == 0) {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php', opciones)
		//fetch('https://localhost:44351/Api/Empleados',opciones)
		fetch('https://localhost:44334/Api/Empleados',opciones)
		.then(respuesta => respuesta.json())
		.then(resultado =>{
			resultado.forEach(elemento => {            
				miTabla02 = miTabla02 + 
		"                    <tr>" +
		"                        <td>" + elemento.EmployeeID + "</td>" +
		"                        <td>" + elemento.FirstName + "</td>" +
		"                        <td>" + elemento.LastName + "</td>" +
		"                        <td><input type=\"button\" value=\"Detalle\" onclick=\"miAjax(" + elemento.EmployeeID + ")\"></td>" +
		"                    </tr>";
			});
			miTabla = miTabla01 + miTabla02 + miTabla03;    
			document.getElementById("miTabla").innerHTML = miTabla;
		});
	} else {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php?id=' + param, opciones)
		//fetch('https://localhost:44351/Api/Empleados/' + param,opciones)
		fetch('https://localhost:44334/Api/Empleados/' + param,opciones)
		.then(respuesta => respuesta.json())
		.then(resultado =>{
		//	resultado.forEach(elemento => {            
				miTablaDetalle = miTablaDetalle +
		"   			   <table>" +  
		"                    <tr>" +
		"						 <th>EmployeeID</th>" +
/*		"                        <td>" + elemento.EmployeeID + "</td>" +*/
		//"                        <td>" + resultado[0].EmployeeID + "</td>" +
		"                        <td>" + resultado.EmployeeID + "</td>" +
		"                    </tr>" +
		"                    <tr>" +
		"						 <th>FirstName</th>" +
/*		"                        <td>" + elemento.FirstName + "</td>" +*/
		//"                        <td>" + resultado[0].FirstName + "</td>" +
		"                        <td>" + resultado.FirstName + "</td>" +
		"                    </tr>" +
		"                    <tr>" +
		"						 <th>LastName</th>" +
/*		"                        <td>" + elemento.LastName + "</td>" +*/
		//"                        <td>" + resultado[0].LastName + "</td>" +
		"                        <td>" + resultado.LastName + "</td>" +
		"                    </tr>" +
		"                    <tr>" +
		"						 <th>Imagen</th>" +
/*		"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/empleado/" + elemento.EmployeeID + ".jpg\"></td>" +*/
		//"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/empleado/" + resultado[0].EmployeeID + ".jpg\"></td>" +
		"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/empleado/" + resultado.EmployeeID + ".jpg\"></td>" +
		"                    </tr>" +
		"   			   </table>";
		//	});
			//miTabla = miTabla01 + miTabla02 + miTabla03;    
			document.getElementById("miTablaDetalle").innerHTML = miTablaDetalle;
		});
	}

}





function categorias(param) {

	var miTabla = "";
	var miTabla01 =
		"   <table>" +
		"        <thead>" +
		"           <tr>" +
		"               <th>CategoryID</th>" +
		"               <th>CategoryName</th>" +
		"               <th>Description</th>" +
		"           </tr>" +
		"        </thead>" +
		"        <tbody>";
	var miTabla02 = "";
	var miTabla03 =
		"       </tbody>" +
		"   </table>";

	var miTablaDetalle = "";
	const opciones = {
		method: 'GET'
	}
	//[{"EmployeeID":"1","LastName":"Davolio","FirstName":"Nancy","Title":"Sales Representative","TitleOfCourtesy":"Ms.","BirthDate":"1948-12-08 00:00:00","HireDate":"1992-05-01 00:00:00","Address":"507 - 20th Ave. E.Apt. 2A","City":"Seattle","Region":"WA","PostalCode":"98122","Country":"USA","HomePhone":"(206) 555-9857","Extension":"5467","Photo":null,"Notes":"Education includes a BA in psychology from Colorado State University in 1970. She also completed \"The Art of the Cold Call.\" Nancy is a member of Toastmasters International.","ReportsTo":"2","PhotoPath":"http:\/\/accweb\/emmployees\/davolio.bmp","Salary":"2954.55"},
	if (param == null || param == 0) {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php', opciones)
		//fetch('https://localhost:44351/Api/Categorias',opciones)
		fetch('https://localhost:44334/Api/Categorias', opciones)
			.then(respuesta => respuesta.json())
			.then(resultado => {
				resultado.forEach(elemento => {
					miTabla02 = miTabla02 +
						"                    <tr>" +
						"                        <td>" + elemento.CategoryID + "</td>" +
						"                        <td>" + elemento.CategoryName + "</td>" +
						"                        <td>" + elemento.Description + "</td>" +
						"                        <td><input type=\"button\" value=\"Detalle\" onclick=\"categorias(" + elemento.CategoryID + ")\"></td>" +
						"                    </tr>";
				});
				miTabla = miTabla01 + miTabla02 + miTabla03;    
				document.getElementById("miTabla").innerHTML = miTabla;
			});
	} else {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php?id=' + param, opciones)
		//fetch('https://localhost:44351/Api/Categorias/' + param,opciones)
		fetch('https://localhost:44334/Api/Categorias/' + param, opciones)
			.then(respuesta => respuesta.json())
			.then(resultado => {
				//	resultado.forEach(elemento => {            
				miTablaDetalle = miTablaDetalle +
					"   			   <table>" +
					"                    <tr>" +
					"						 <th>CategoryID</th>" +
					/*		"                        <td>" + elemento.EmployeeID + "</td>" +*/
					//"                        <td>" + resultado[0].EmployeeID + "</td>" +
					"                        <td>" + resultado.CategoryID + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>CategoryName</th>" +
					/*		"                        <td>" + elemento.FirstName + "</td>" +*/
					//"                        <td>" + resultado[0].FirstName + "</td>" +
					"                        <td>" + resultado.CategoryName + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>Description</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					//"                        <td>" + resultado[0].LastName + "</td>" +
					"                        <td>" + resultado.Description + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>Imagen</th>" +
					/*		"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/categoria/" + elemento.EmployeeID + ".jpg\"></td>" +*/
					//"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/categoria/" + resultado[0].EmployeeID + ".jpg\"></td>" +
					"                        <td><img src=\"https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/Images/categoria/" + resultado.CategoryID + ".gif\"></td>" +
					"                    </tr>" +

					"   			   </table>";
				//	});
			//miTabla = miTabla01 + miTabla02 + miTabla03;    
				document.getElementById("miTablaDetalle").innerHTML = miTablaDetalle;
			});
	}





}













function proveedores(param) {

	var miTabla = "";
	var miTabla01 =
		"   <table>" +
		"        <thead>" +
		"           <tr>" +
		"               <th>supplierID</th>" +
		"               <th>supplierName</th>" +
		"               <th>ContactName</th>" +
		"           </tr>" +
		"        </thead>" +
		"        <tbody>";
	var miTabla02 = "";
	var miTabla03 =
		"       </tbody>" +
		"   </table>";

	var miTablaDetalle = "";
	const opciones = {
		method: 'GET'
	}
	//[{"EmployeeID":"1","LastName":"Davolio","FirstName":"Nancy","Title":"Sales Representative","TitleOfCourtesy":"Ms.","BirthDate":"1948-12-08 00:00:00","HireDate":"1992-05-01 00:00:00","Address":"507 - 20th Ave. E.Apt. 2A","City":"Seattle","Region":"WA","PostalCode":"98122","Country":"USA","HomePhone":"(206) 555-9857","Extension":"5467","Photo":null,"Notes":"Education includes a BA in psychology from Colorado State University in 1970. She also completed \"The Art of the Cold Call.\" Nancy is a member of Toastmasters International.","ReportsTo":"2","PhotoPath":"http:\/\/accweb\/emmployees\/davolio.bmp","Salary":"2954.55"},
	if (param == null || param == 0) {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php', opciones)
		//fetch('https://localhost:44351/Api/Proveedores',opciones)
		fetch('https://localhost:44334/Api/Proveedores', opciones)
			.then(respuesta => respuesta.json())
			.then(resultado => {
				resultado.forEach(elemento => {
					miTabla02 = miTabla02 +
						"                    <tr>" +
						"                        <td>" + elemento.supplierID + "</td>" +
						"                        <td>" + elemento.supplierName + "</td>" +
						"                        <td>" + elemento.ContactName + "</td>" +
						"                        <td><input type=\"button\" value=\"Detalle\" onclick=\"proveedores(" + elemento.supplierID + ")\"></td>" +
						"                    </tr>";
				});
				miTabla = miTabla01 + miTabla02 + miTabla03;
				document.getElementById("miTabla").innerHTML = miTabla;
			});
	} else {
		//fetch('https://tupelu.es/Ajax_y_Json/ajax_northwind_mysql/ajax_actual_fetch/detail/consulta.php?id=' + param, opciones)
		//fetch('https://localhost:44351/Api/Proveedores/' + param,opciones)
		fetch('https://localhost:44334/Api/Proveedores/' + param, opciones)
			.then(respuesta => respuesta.json())
			.then(resultado => {
				//	resultado.forEach(elemento => {            
				miTablaDetalle = miTablaDetalle +
					"   			   <table>" +
					"                    <tr>" +
					"						 <th>supplierID</th>" +
					/*		"                        <td>" + elemento.EmployeeID + "</td>" +*/
					//"                        <td>" + resultado[0].EmployeeID + "</td>" +
					"                        <td>" + resultado.supplierID + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>supplierName</th>" +
					/*		"                        <td>" + elemento.FirstName + "</td>" +*/
					//"                        <td>" + resultado[0].FirstName + "</td>" +
					"                        <td>" + resultado.supplierName + "</td>" +
					"                    </tr>" +
					"                    <tr>" +
					"						 <th>ContactName</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					//"                        <td>" + resultado[0].LastName + "</td>" +
					"                        <td>" + resultado.ContactName + "</td>" +
					"                    </tr>" +

					"                    <tr>" +
					"						 <th>Address</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					//"                        <td>" + resultado[0].LastName + "</td>" +
					"                        <td>" + resultado.Address + "</td>" +
					"                    </tr>" +

					"                    <tr>" +
					"						 <th>City</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					//"                        <td>" + resultado[0].LastName + "</td>" +
					"                        <td>" + resultado.City + "</td>" +
					"                    </tr>" +

					"                    <tr>" +
					"						 <th>PostalCode</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					//"                        <td>" + resultado[0].LastName + "</td>" +
					"                        <td>" + resultado.PostalCode + "</td>" +
					"                    </tr>" +

					"                    <tr>" +
					"						 <th>Country</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					//"                        <td>" + resultado[0].LastName + "</td>" +
					"                        <td>" + resultado.Country + "</td>" +
					"                    </tr>" +


					"                    <tr>" +
					"						 <th>Phone</th>" +
					/*		"                        <td>" + elemento.LastName + "</td>" +*/
					//"                        <td>" + resultado[0].LastName + "</td>" +
					"                        <td>" + resultado.Phone + "</td>" +
					"                    </tr>" +


					"   			   </table>";
				//	});
				//miTabla = miTabla01 + miTabla02 + miTabla03;    
				document.getElementById("miTablaDetalle").innerHTML = miTablaDetalle;
			});
	}





}



