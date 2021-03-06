var AccessKeyId= '';
var AccessKeySecret= '';

/**
 * 初始化阿里云客户端
 * @author penguinhj
 * @DateTime 2019-10-10T11:20:54+0800
 * @param    {[Object]}                 opt [注册参数]
 * @param    {[String]}                 AccessKeyId [阿里云访问id]
 * @param    {[String]}                 AccessKeySecret [阿里云访问密钥]
 */
var client = require("../index").init({
	AccessKeyId:AccessKeyId,
	AccessKeySecret:AccessKeySecret
})

// console.log(client);

/**
 * 人脸检测定位
 * @author penguinhj
 * @DateTime 2019-10-10T11:11:13+0800
 * @param    {[Number]}                 type [0: 通过url识别，参数image_url不为空；1: 通过图片content识别，参数content不为空]
 * @param    {[String]}                 image_url [输入图像URL]
 * @param    {[String]}                 content [图像内容，base64编码]
 * 注意：如使用JS调用，请在生成图片的base64编码前缀中去掉data:image/jpeg;base64
 */
var client_detect = function(){
	client.face.detect({
		type:0,
		image_url:"https://hulatest.oss-cn-hangzhou.aliyuncs.com/face5.jpeg"
	})
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_detect();

/**
 * 人脸属性识别
 * @author penguinhj
 * @DateTime 2019-10-10T11:11:13+0800
 * @param    {[Number]}                 type [0: 通过url识别，参数image_url不为空；1: 通过图片content识别，参数content不为空]
 * @param    {[String]}                 image_url [输入图像URL]
 * @param    {[String]}                 content [图像内容，base64编码]
 * 注意：如使用JS调用，请在生成图片的base64编码前缀中去掉data:image/jpeg;base64
 */
var client_attribute = function(){
	client.face.attribute({
		type:0,
		image_url:"https://hulatest.oss-cn-hangzhou.aliyuncs.com/face5.jpeg"
	})
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_attribute();

/**
 * 人脸比对
 * @author penguinhj
 * @DateTime 2019-10-10T11:11:13+0800
 * @param    {[Number]}                 type [0: 通过url识别，参数image_url不为空；1: 通过图片content识别，参数content不为空]
 * @param    {[String]}                 image_url_1 [输入图片1的URL]
 * @param    {[String]}                 content_1 [输入图片2的内容，base64编码]
 * @param    {[String]}                 image_url_2 [输入图片2的URL]
 * @param    {[String]}                 content_2 [输入图片2的内容，base64编码]
 * 注意：如使用JS调用，请在生成图片的base64编码前缀中去掉data:image/jpeg;base64
 */
var client_verify = function(){
	client.face.verify({
		type:0,
		image_url_1:"https://hulatest.oss-cn-hangzhou.aliyuncs.com/face5.jpeg",
		image_url_2:"https://hulatest.oss-cn-hangzhou.aliyuncs.com/face1.jpeg"
	})
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_verify();

/**
 * 添加人脸
 * @author penguinhj
 * @DateTime 2019-10-10T16:27:22+0800
 * @param    {[String]}                 Group [新添加人脸的分组]
 * @param    {[String]}                 Image [新添加人脸的编号]
 * @param    {[String]}                 Person [新添加人脸的姓名]
 * @param    {[String]}                 ImageUrl [新添加人脸所在图片的URL地址，Content、ImageUrl同时存在取ImageUrl]
 * @param    {[String]}                 Content [新添加人脸所在图片的Base64内容，Content、ImageUrl同时存在取ImageUrl]
 */
var client_addFace = function(){

	client.face.addFace({
		Group:"test",
		Image:"image5",
		Person:"person5",
		ImageUrl:"https://hulatest.oss-cn-hangzhou.aliyuncs.com/face5.jpeg"
	})
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_addFace();

/**
 * 删除人脸
 * @author penguinhj
 * @DateTime 2019-10-11T09:59:45+0800
 * @param    {[String]}                 Group [新添加人脸的分组]
 * @param    {[String]}                 Image [新添加人脸的编号]
 * @param    {[String]}                 Person [新添加人脸的姓名]
 */
var client_deleteFace = function(){

	client.face.deleteFace({
		Group:"test",
		Image:"image5",
		Person:"person5",
		ImageUrl:"https://hulatest.oss-cn-hangzhou.aliyuncs.com/face5.jpeg"
	})
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_deleteFace();

/**
 * 组内人脸列表
 * @author penguinhj
 * @DateTime 2019-10-11T10:22:24+0800
 * @param    {[String]}                 Group [新添加人脸的分组]
 */
var client_listFace = function(){

	client.face.listFace({
		Group:"test"
	})
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_listFace();

/**
 * 人脸组列表
 * @author penguinhj
 * @DateTime 2019-10-11T10:22:24+0800
 */
var client_listGroup = function(){

	client.face.listGroup()
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_listGroup();

/**
 * 人脸查找
 * @author penguinhj
 * @DateTime 2019-10-11T13:15:49+0800
 * @return   {[type]}                 [description]
 * @param    {[String]}                 ImageUrl [新添加人脸所在图片的URL地址，Content、ImageUrl同时存在取ImageUrl]
 * @param    {[String]}                 Content [新添加人脸所在图片的Base64内容，Content、ImageUrl同时存在取ImageUrl]
 */
var client_recognizeFace = function(){

	client.face.recognizeFace({
		Group:"test",
		ImageUrl:"https://hulatest.oss-cn-hangzhou.aliyuncs.com/face1.jpeg"
	})
	.then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}

// client_recognizeFace();



