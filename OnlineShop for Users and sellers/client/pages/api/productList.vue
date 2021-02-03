<template>
    <div>
        
        <!-- Page Title start -->
        <div class="pageTitle">
        <div class="container">
            <div class="row">
            <div class="col-md-6 col-sm-6">
                <h1 class="page-heading">Listing</h1>
            </div>
            <div class="col-md-6 col-sm-6">
                <div class="breadCrumb"><a href="../">Home</a> / <a href="#.">Search</a> / <span>Search Result</span></div>
            </div>
            </div>
        </div>
        </div>
        <!-- Page Title End -->

        <div class="listpgWraper">
        <div class="container"> 
            
            <!-- Page Title start -->
            <div class="pageSearch">
            <div class="row">
                <div class="col-md-3"><a href="#." class="btn"><i class="fa fa-file-text" aria-hidden="true"></i> Post a Free Ad</a></div>
                <div class="col-md-9">
                <div class="searchform">
                    <div class="row">
                    <div class="col-md-5 col-sm-4">
                        <input type="text" class="form-control" placeholder="Search" />
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <select class="form-control">
                        <option>Categories</option>
                        </select>
                    </div>
                    <div class="col-md-3 col-sm-3">
                        <select class="form-control">
                        <option>Location</option>
                        </select>
                    </div>
                    <div class="col-md-1 col-sm-2">
                        <button class="btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <!-- Page Title end --> 
            
            <!-- Search Result and sidebar start -->
            <div class="row">
            <div class="col-md-3 col-sm-5"> 
                <!-- Side Bar start -->
                <div class="sidebar"> 
                <!-- Ads By City -->
                <div class="widget">
                    <h4 class="widget-title">Ads By City</h4>
                    <ul class="optionlist">
                    <li>
                        <input type="checkbox" name="checkname" id="newyork" />
                        <label for="newyork"></label>
                        New York <span>12</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="losangles" />
                        <label for="losangles"></label>
                        Los Angeles <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="chicago" />
                        <label for="chicago"></label>
                        Chicago <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="houston" />
                        <label for="houston"></label>
                        Houston <span>12</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="sandiego" />
                        <label for="sandiego"></label>
                        San Diego <span>555</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="sanjose" />
                        <label for="sanjose"></label>
                        San Jose <span>44</span> </li>
                    </ul>
                    <a href="#.">View More</a> </div>
                <!-- Ads By City end--> 
                
                <!-- Price -->
                <div class="widget">
                    <h4 class="widget-title">Price Range</h4>
                    <ul class="optionlist">
                    <li>
                        <input type="checkbox" name="checkname" id="price1" />
                        <label for="price1"></label>
                        0 to $100 <span>12</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="price2" />
                        <label for="price2"></label>
                        $100 to $199 <span>41</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="price3" />
                        <label for="price3"></label>
                        $199 to $499 <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="price4" />
                        <label for="price4"></label>
                        $499 to $999 <span>66</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="price5" />
                        <label for="price5"></label>
                        $999 to $4999 <span>159</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="price6" />
                        <label for="price6"></label>
                        Above $4999 <span>865</span> </li>
                    </ul>
                    <div class="row">
                    <div class="col-md-6">
                        <select class="form-control">
                        <option>From</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="form-control">
                        <option>To</option>
                        </select>
                    </div>
                    </div>
                </div>
                <!-- Price end --> 
                
                <!-- Year -->
                <div class="widget">
                    <h4 class="widget-title">Year Range</h4>
                    <div class="row">
                    <div class="col-md-6">
                        <select class="form-control">
                        <option>From</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <select class="form-control">
                        <option>To</option>
                        </select>
                    </div>
                    </div>
                </div>
                <!-- Year end --> 
                
                <!-- type -->
                <div class="widget">
                    <h4 class="widget-title">Type</h4>
                    <select class="form-control">
                    <option>New</option>
                    <option>Used Car</option>
                    </select>
                </div>
                <!-- type end --> 
                
                <!-- Make -->
                <div class="widget">
                    <h4 class="widget-title">Make</h4>
                    <select class="form-control">
                    <option>BMW</option>
                    <option>Honda</option>
                    <option>Toyota</option>
                    <option>Suzuki</option>
                    </select>
                </div>
                <!-- Make end --> 
                
                <!-- Model -->
                <div class="widget">
                    <h4 class="widget-title">Model</h4>
                    <select class="form-control">
                    <option>Select Model</option>
                    <option>JIMNY DX MT</option>
                    <option>SUZUKI CIAZ GL AT</option>
                    <option>SWIFT AT</option>
                    </select>
                </div>
                <!-- Model end --> 
                
                <!-- Jobs By Experience -->
                <div class="widget">
                    <h4 class="widget-title">Jobs By Experience</h4>
                    <ul class="optionlist">
                    <li>
                        <input type="checkbox" name="checkname" id="permanent" />
                        <label for="permanent"></label>
                        Full Time/Permanent <span>12</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="contract" />
                        <label for="contract"></label>
                        Contract <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="parttime" />
                        <label for="parttime"></label>
                        Part Time <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="internship" />
                        <label for="internship"></label>
                        Internship <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="freelance" />
                        <label for="freelance"></label>
                        Freelance <span>33</span> </li>
                    </ul>
                    <a href="#.">View More</a> </div>
                <!-- Jobs By Experience end --> 
                
                <!-- Jobs By Industry -->
                <div class="widget">
                    <h4 class="widget-title">Jobs By Industry</h4>
                    <ul class="optionlist">
                    <li>
                        <input type="checkbox" name="checkname" id="infotech" />
                        <label for="infotech"></label>
                        Information Technology <span>22</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="advertise" />
                        <label for="advertise"></label>
                        Advertising/PR <span>45</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="services" />
                        <label for="services"></label>
                        Services <span>44</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="health" />
                        <label for="health"></label>
                        Health & Fitness <span>88</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="mediacomm" />
                        <label for="mediacomm"></label>
                        Media/Communications <span>22</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="fashion" />
                        <label for="fashion"></label>
                        Fashion <span>11</span> </li>
                    </ul>
                    <a href="#.">View More</a> </div>
                <!-- Jobs By Industry end --> 
                
                <!-- Top Companies -->
                <div class="widget">
                    <h4 class="widget-title">Top Companies</h4>
                    <ul class="optionlist">
                    <li>
                        <input type="checkbox" name="checkname" id="Envato" />
                        <label for="Envato"></label>
                        Envato <span>12</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="Themefores" />
                        <label for="Themefores"></label>
                        Themefores <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="GraphicRiver" />
                        <label for="GraphicRiver"></label>
                        Graphic River <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="Codecanyon" />
                        <label for="Codecanyon"></label>
                        Codecanyon <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="AudioJungle" />
                        <label for="AudioJungle"></label>
                        Audio Jungle <span>33</span> </li>
                    <li>
                        <input type="checkbox" name="checkname" id="Videohive" />
                        <label for="Videohive"></label>
                        Videohive <span>33</span> </li>
                    </ul>
                    <a href="#.">View More</a> </div>
                <!-- Top Companies end --> 
                
                <!-- button -->
                <div class="searchnt">
                    <button class="btn"><i class="fa fa-search" aria-hidden="true"></i> Update Results</button>
                </div>
                <!-- button end--> 
                </div>
                <!-- Side Bar end --> 
            </div>
            <div class="col-md-9 col-sm-7">
                <div class="sortbybar">
                <div class="row">
                    <div class="col-sm-4"> <a href="listing.html" data-toggle="tooltip" data-placement="top" title="" class="listby" data-original-title="Result by List View"><i class="fa fa-th-list" aria-hidden="true"></i></a> <a href="grid.html" data-toggle="tooltip" data-placement="top" title="" class="listby" data-original-title="Result by Gallery View"><i class="fa fa-th-large" aria-hidden="true"></i></a> </div>
                    <div class="col-sm-4">
                    <div class="input-group"> <span class="input-group-addon" id="basic-addon3">Sort By</span>
                        <select class="form-control">
                        <option>Most recent</option>
                        <option>Price: Rs Low to High</option>
                        <option>Price: Rs High to Low</option>
                        </select>
                    </div>
                    </div>
                    <div class="col-sm-4">
                    <div class="found"> 235 results for Mathematic Tutors <strong> Profile showing 1 to 10 out of 711 </strong> </div>
                    </div>
                </div>
                </div>
                
                <!-- Search List -->
                <ul class="searchList" v-for="product in products" :key="product._id">
                <!-- ad start -->
                    <li>
                        <div class="row">
                        <div class="col-md-2 col-sm-4">
                            <div class="adimg"><img src="/images/ads/01.jpg" alt="ad Name" /></div>
                        </div>
                        <div class="col-md-10 col-sm-8">
                            <div class="jobinfo">
                            <div class="row">
                                <div class="col-md-8 col-sm-7">
                                <h3><a href="#.">{{product.title}}</a></h3>
                                <div class="cateName"> <a href="#.">Cars</a> <i class="fa fa-angle-double-right" aria-hidden="true"></i> <a href="#.">{{product.category.type}}</a> </div>
                                <div class="location"><i class="fa fa-user" aria-hidden="true"></i><span>{{product.vendor.name}}</span></div>
                                <div class="clearfix"></div>
                                <p>{{product.description}}</p>
                                <div class="listbtn"><a href="../details/_id">View Details</a></div>
                                </div>
                                <div class="col-md-4 col-sm-5 text-right">
                                <div class="adprice">${{product.price}}</div>
                                <div class="adverify"><i class="fa fa-check-square-o" aria-hidden="true"></i> Verified Seller</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </li>
                <!-- ad end --> 
           
                </ul>
                
                <!-- Pagination Start -->
                <div class="pagiWrap">
                <div class="row">
                    <div class="col-md-4 col-sm-4">
                    <div class="showreslt">Showing 1-10</div>
                    </div>
                    <div class="col-md-8 col-sm-8 text-right">
                    <ul class="pagination">
                        <li class="active"><a href="#.">1</a></li>
                        <li><a href="#.">2</a></li>
                        <li><a href="#.">3</a></li>
                        <li><a href="#.">4</a></li>
                        <li><a href="#.">5</a></li>
                        <li><a href="#.">6</a></li>
                        <li><a href="#.">7</a></li>
                        <li><a href="#.">8</a></li>
                    </ul>
                    </div>
                </div>
                </div>
                <!-- Pagination end --> 
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
     async asyncData({$axios}){
        try{
            const productResponse = await $axios.$get('http://localhost:3000/api/products')
            return{
                products: productResponse.products
            }

        }catch(err){
            console.log(err)
        }
    }

}
</script>

<style>

</style>