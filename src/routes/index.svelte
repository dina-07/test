<!-- <style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style> -->




<!-- 
<body>
<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='maskot 1.svg'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>

<table id="responsive-data-table" class="table dt-responsive nowrap" style="width:100%">
  <thead>
   <tr>
    <th>First name</th>
    <th>Last name</th>
    <th>Position</th>
    <th>Office</th>
    <th>Age</th>
    <th>Start date</th>
    <th>Salary</th>
    <th>Extn.</th>
    <th>E-mail</th>
   </tr>
  </thead>

  <tbody>
   <tr>
    <td>Tiger</td>
    <td>Nixon</td>
    <td>System Architect</td>
    <td>Edinburgh</td>
    <td>12</td>
    <td>2011/04/25</td>
    <td>$320,800</td>
    <td>5421</td>
    <td>t.nixon@datatables.net</td>
   </tr>
  </tbody>
 </table>


 <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="https://unpkg.com/sleek-dashboard/dist/assets/js/sleek.bundle.js"></script>

</body> -->

<svelte:head>


	<meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Sleek Dashboard - Free Bootstrap 4 Admin Dashboard Template and UI Kit. It is very powerful bootstrap admin dashboard, which allows you to build products like admin panels, content management systems and CRMs etc.">


  <title>STIKOM</title>

  <!-- GOOGLE FONTS -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500|Poppins:400,500,600,700|Roboto:400,500" rel="stylesheet" />
  <link href="https://cdn.materialdesignicons.com/4.4.95/css/materialdesignicons.min.css" rel="stylesheet" />


  <!-- PLUGINS CSS STYLE -->
  <link href="assets/plugins/nprogress/nprogress.css" rel="stylesheet" />

  
  
  <link href="assets/plugins/daterangepicker/daterangepicker.css" rel="stylesheet" />
  
  
  
  <link href="assets/plugins/data-tables/datatables.bootstrap4.min.css" rel="stylesheet" />
  
  
  
  <link href="assets/plugins/data-tables/responsive.datatables.min.css" rel="stylesheet" />
  
  

  <!-- SLEEK CSS -->
  <link id="sleek-css" rel="stylesheet" href="assets/css/sleek.css" />

  <!-- FAVICON -->
  <link href="assets/img/favicon.png" rel="shortcut icon" />

  <script src="assets/plugins/nprogress/nprogress.js"></script>
</svelte:head>



<body id="body" class="header-fixed sidebar-fixed sidebar-dark header-light">
  
  <script>
    NProgress.configure({ showSpinner: false });
    NProgress.start();
  </script>

  

  <div class="wrapper">
   


        <aside class="left-sidebar bg-sidebar">
          <div id="sidebar" class="sidebar sidebar-with-footer">
            <!-- Aplication Brand -->
            <div class="app-brand">
              <a href="." title="Sleek Dashboard">
                <svg
                  class="brand-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  width="30"
                  height="33"
                  viewBox="0 0 30 33"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      class="logo-fill-blue"
                      fill="#7DBCFF"
                      d="M0 4v25l8 4V0zM22 4v25l8 4V0z"
                    />
                    <path class="logo-fill-white" fill="#FFF" d="M11 4v25l8 4V0z" />
                  </g>
                </svg>
                <span class="brand-name text-truncate">Sleek Dashboard</span>
              </a>
            </div>
            <!-- begin sidebar scrollbar -->
            <div class="sidebar-scrollbar">

              <!-- sidebar menu -->
              <ul class="nav sidebar-inner" id="sidebar-menu">
                

                
                  <li  class="has-sub" >
                    <a class="sidenav-item-link active" href="javascript:void(0)" data-toggle="collapse" data-target="#dashboard"
                      aria-expanded="false" aria-controls="dashboard">
                      <i class="mdi mdi-view-dashboard-outline"></i>
                      <span class="nav-text">Mahasiswa</span> <b class="caret"></b>
                    </a>
                    <ul  class="collapse"  id="dashboard"
                      data-parent="#sidebar-menu">
                      <div class="sub-menu">
                        
                        
                          
                            <li >
                              <a class="sidenav-item-link" href=".">
                                <span class="nav-text">Data Mahasiswa</span>
                                
                              </a>
                            </li>
            
                            <li >
                              <a class="sidenav-item-link" href="payment">
                                <span class="nav-text">Input Data</span>
                                
                                <!-- <span class="badge badge-success">new</span> -->
                                
                              </a>
                            </li>
                          
                        

                        
                      </div>
                    </ul>
                  </li>
                

                

                
                  <li  class="has-sub" >
                    <a class="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#app"
                      aria-expanded="false" aria-controls="app">
                      <i class="mdi mdi-pencil-box-multiple"></i>
                      <span class="nav-text">MATA KULIAH</span> <b class="caret"></b>
                    </a>
                    <ul  class="collapse"  id="app"
                      data-parent="#sidebar-menu">
                      <div class="sub-menu">
                        
                        
                          
                            <li >
                              <a class="sidenav-item-link" href="about">
                                <span class="nav-text">Daftar Matkul</span>
                                
                              </a>
                            </li>
                            <li >
                              <a class="sidenav-item-link" href="about">
                                <span class="nav-text">Input Matkul</span>
                                
                              </a>
                            </li>
                      </div>
                    </ul>
                  </li>



				  <li  class="has-sub" >
                    <a class="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#charts"
                      aria-expanded="false" aria-controls="charts">
                      <i class="mdi mdi-account-card-details"></i>
                      <span class="nav-text">DOSEN</span> <b class="caret"></b>
                    </a>
                    <ul  class="collapse"  id="charts"
                      data-parent="#sidebar-menu">
                      <div class="sub-menu">
                        
                        
                          
                            <li >
                              <a class="sidenav-item-link" href="about">
                                <span class="nav-text">Daftar Dosen</span>
                                
                              </a>
                            </li>
                            <li >
                              <a class="sidenav-item-link" href="about">
                                <span class="nav-text">Input Data Dosen</span>
                                
                              </a>
                            </li>
                      </div>
                    </ul>
                  </li>


				   <li  class="has-sub" >
                    <a class="sidenav-item-link" href="javascript:void(0)" data-toggle="collapse" data-target="#components"
                      aria-expanded="false" aria-controls="components">
                      <i class="mdi mdi-database-edit"></i>
                      <span class="nav-text">KEUANGAN</span> <b class="caret"></b>
                    </a>
                    <ul  class="collapse"  id="components"
                      data-parent="#sidebar-menu">
                      <div class="sub-menu">
                        
                        
                          
                            <li >
                              <a class="sidenav-item-link" href="about">
                                <span class="nav-text">Data Keuangan</span>
                                
                              </a>
                            </li>
                            <li >
                              <a class="sidenav-item-link" href="about">
                                <span class="nav-text">Input Data</span>
                                
                              </a>
                            </li>
                      </div>
                    </ul>
                  </li>


        </aside>


    <div class="page-wrapper">
                <!-- Header -->
          <header class="main-header " id="header">
            <nav class="navbar navbar-static-top navbar-expand-lg">
              <!-- Sidebar toggle button -->
              <button id="sidebar-toggler" class="sidebar-toggle">
                <span class="sr-only">Toggle navigation</span>
              </button>
              <!-- search form -->
              <div class="search-form d-none d-lg-inline-block">
                <div class="input-group">
                  <button type="button" name="search" id="search-btn" class="btn btn-flat">
                    <i class="mdi mdi-magnify"></i>
                  </button>
                  <input type="text" name="query" id="search-input" class="form-control" placeholder="search..."
                    autocomplete="off" />
                </div>
                <div id="search-results-container">
                  <ul id="search-results"></ul>
                </div>
              </div>

              <div class="navbar-right ">
                <ul class="nav navbar-nav">
                  <li class="right-sidebar-in right-sidebar-2-menu">
                    <i class="mdi mdi-settings mdi-spin"></i>
                  </li>


                  <!-- User Account -->

                  <li class="dropdown user-menu">
                    <button href="." class="dropdown-toggle nav-link" data-toggle="dropdown">
                      <img src="assets/img/user/user.png" class="user-image" alt="User Image" />
                      <span class="d-none d-lg-inline-block">STIKOM Admin 1</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                      <!-- User image -->
                      <li class="dropdown-header">
                        <img src="assets/img/user/user.png" class="img-circle" alt="User Image" />
                        <div class="d-inline-block">
                          Abdus Salam <small class="pt-1">iamabdus@gmail.com</small>
                        </div>
                      </li>

                      <li>
                        <a href=".">
                          <i class="mdi mdi-account"></i> My Profile
                        </a>
                      </li>
                      <li class="right-sidebar-in">
                        <a href="javascript:0"> <i class="mdi mdi-settings"></i> Setting </a>
                      </li>

                      <li class="dropdown-footer">
                        <a href="."> <i class="mdi mdi-logout"></i> Log Out </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>


          </header>


      <div class="content-wrapper">
        <div class="content">
		<div class="breadcrumb-wrapper">
			<h1>Mahasiswa STIKOM Banyuwangi</h1>
								
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb p-0">
            <li class="breadcrumb-item">
              <a href=".">
                <span class="mdi mdi-home"></span>                
              </a>
            </li>
            <li class="breadcrumb-item">
              MAHASISWA
            </li>
            <li class="breadcrumb-item" aria-current="page">Data Mahasiswa</li>
          </ol>
        </nav>

							</div>

							<div class="row">
								<div class="col-12">
									<div class="card card-default">
										<div class="card-header card-header-border-bottom d-flex justify-content-between">
											<h2>Data Mahasiswa</h2>
										</div>

										<div class="card-body">
											<div class="responsive-data-table">
												<table id="responsive-data-table" class="table dt-responsive nowrap" style="width:100%">
													<thead>
														<tr>
															<th>NIM</th>
															<th>Nama</th>
															<th>Tgl. Lahir</th>
															<th>Alamat</th>
															<th>No.Hp</th>
															<th>Angkatan</th>
															<th>Prodi</th>
															<th>E-mail</th>
														</tr>
													</thead>

													<tbody>
													
														<tr>
															<td>Tatyana</td>
															<td>Fitzpatrick</td>
															<td>Regional Director</td>
															<td>London</td>
															<td>19</td>
															<td>2010/03/17</td>
															<td>1965</td>
															<td>t.fitzpatrick@datatables.net</td>
														</tr>

														<tr>
															<td>Michael</td>
															<td>Silva</td>
															<td>Marketing Designer</td>
															<td>London</td>
															<td>66</td>
															<td>$198,500</td>
															<td>2109</td>
															<td>m.silva@datatables.net</td>
														</tr>

														<tr>
															<td>Paul</td>
															<td>Byrd</td>
															<td>New York</td>
															<td>64</td>
															<td>2010/06/09</td>
															<td>$725,000</td>
															<td>3059</td>
															<td>p.byrd@datatables.net</td>
														</tr>

														<tr>
															<td>Gloria</td>
															<td>Little</td>
															<td>Systems Administrator</td>
															<td>New York</td>
															<td>2009/04/10</td>
															<td>$237,500</td>
															<td>1721</td>
															<td>g.little@datatables.net</td>
														</tr>

													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>

        


<!-- Side bar -->
        <div class="right-sidebar-2">
    <div class="right-sidebar-container-2">
      <div class="slim-scroll-right-sidebar-2">

      <div class="right-sidebar-2-header">
        <h2>Layout Settings</h2>
        <p>User Interface Settings</p>
        <div class="btn-close-right-sidebar-2">
          <i class="mdi mdi-window-close"></i>
        </div>
      </div>

      <div class="right-sidebar-2-body">
        <span class="right-sidebar-2-subtitle">Header Layout</span>
        <div class="no-col-space">
          <a href="javascript:void(0);" class="btn-right-sidebar-2 header-fixed-to btn-right-sidebar-2-active">Fixed</a>
          <a href="javascript:void(0);" class="btn-right-sidebar-2 header-static-to">Static</a>
        </div>

        <span class="right-sidebar-2-subtitle">Sidebar Layout</span>
        <div class="no-col-space">
          <select class="right-sidebar-2-select" id="sidebar-option-select">
            <option value="sidebar-fixed">Fixed Default</option>
            <option value="sidebar-fixed-minified">Fixed Minified</option>
            <option value="sidebar-fixed-offcanvas">Fixed Offcanvas</option>
            <option value="sidebar-static">Static Default</option>
            <option value="sidebar-static-minified">Static Minified</option>
            <option value="sidebar-static-offcanvas">Static Offcanvas</option>
          </select>
        </div>

        <span class="right-sidebar-2-subtitle">Header Background</span>
        <div class="no-col-space">
          <a href="javascript:void(0);" class="btn-right-sidebar-2 btn-right-sidebar-2-active header-light-to">Light</a>
          <a href="javascript:void(0);" class="btn-right-sidebar-2 header-dark-to">Dark</a>
        </div>

        <span class="right-sidebar-2-subtitle">Navigation Background</span>
        <div class="no-col-space">
          <a href="javascript:void(0);" class="btn-right-sidebar-2 btn-right-sidebar-2-active sidebar-dark-to">Dark</a>
          <a href="javascript:void(0);" class="btn-right-sidebar-2 sidebar-light-to">Light</a>
        </div>

        <span class="right-sidebar-2-subtitle">Direction</span>
        <div class="no-col-space">
          <a href="javascript:void(0);" class="btn-right-sidebar-2 btn-right-sidebar-2-active ltr-to">LTR</a>
          <a href="javascript:void(0);" class="btn-right-sidebar-2 rtl-to">RTL</a>
        </div>

        <div class="d-flex justify-content-center" style="padding-top: 30px">
          <div id="reset-options" style="width: auto; cursor: pointer" class="btn-right-sidebar-2 btn-reset">Reset
            Settings</div>
        </div>

      </div>

    </div>
  </div>

</div>

      </div>

                <footer class="footer mt-auto">
            <div class="copyright bg-white">
              <p>
                &copy; <span id="copy-year">2019</span> Copyright Sleek Dashboard Bootstrap Template by
                <a
                  class="text-primary"
                  href="http://www.iamabdus.com/"
                  target="_blank"
                  >Abdus</a
                >.
              </p>
            </div>
            <script>
                var d = new Date();
                var year = d.getFullYear();
                document.getElementById("copy-year").innerHTML = year;
            </script>
          </footer>

    </div>
  </div>

  <script src="assets/plugins/jquery/jquery.min.js"></script>
<script src="assets/plugins/slimscrollbar/jquery.slimscroll.min.js"></script>
<script src="assets/plugins/jekyll-search.min.js"></script>



<script src="assets/plugins/daterangepicker/moment.min.js"></script>
<script src="assets/plugins/daterangepicker/daterangepicker.js"></script>
<script>
  jQuery(document).ready(function() {
    jQuery('input[name="dateRange"]').daterangepicker({
    autoUpdateInput: false,
    singleDatePicker: true,
    locale: {
      cancelLabel: 'Clear'
    }
  });
    jQuery('input[name="dateRange"]').on('apply.daterangepicker', function (ev, picker) {
      jQuery(this).val(picker.startDate.format('MM/DD/YYYY'));
    });
    jQuery('input[name="dateRange"]').on('cancel.daterangepicker', function (ev, picker) {
      jQuery(this).val('');
    });
  });
</script>
  


<script src="assets/plugins/data-tables/jquery.datatables.min.js"></script>
<script src="assets/plugins/data-tables/datatables.bootstrap4.min.js"></script>
  


<script src="assets/plugins/data-tables/datatables.responsive.min.js"></script>
<script>
  jQuery(document).ready(function() {
    jQuery('#responsive-data-table').DataTable({
      "aLengthMenu": [[20, 30, 50, 75, -1], [20, 30, 50, 75, "All"]],
      "pageLength": 20,
      "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
    });
  });
</script>
  
<script src="assets/plugins/ladda/spin.min.js"></script>
<script src="assets/plugins/ladda/ladda.min.js"></script>

<script src="assets/js/sleek.bundle.js"></script>

</body>