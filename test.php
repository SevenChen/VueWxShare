<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST,OPTIONS');
header('Content-Type:application/json; charset=utf-8');

function getShareService($url){
	$service='http://*:20000/wx.php';
	
	$str = file_get_contents($service.'?url='.urlencode($url));
	$arr = json_decode($str,true);
	
	return $arr;
}

$url = $_REQUEST['url'];
$arr = getShareService($url);

echo json_encode($arr);
?>