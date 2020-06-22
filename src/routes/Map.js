/*global kakao*/
import React, { useEffect } from "react";
import styled from "styled-components";
import { datas } from "../utils/tempData";

const API_KEY = "9c8de52352279386620bf641d4f5bb89";

let map = null;

function kakaoMapInit() {
  var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  var options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.5359096224155,126.73757444772625 ), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  };

  return new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
}

function drawMarker(positions){
  // 마커 이미지의 이미지 주소입니다
  console.log(positions);
  const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 

  for (let i = 0; i < positions.length; i++) {

      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(24, 35); 

      // 마커 이미지를 생성합니다    
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

      // 위도, 경도 생성
      const latlng = new kakao.maps.LatLng(positions[i].lat, positions[i].lng);
      
      // 마커를 생성합니다
      new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: latlng, // 마커를 표시할 위치
          title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image : markerImage // 마커 이미지 
      });
      
  }
}

function Map() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        map =kakaoMapInit();
        drawMarker(datas);
      });
    };
  }, []);

  return <MapContainer id="map"></MapContainer>;
}

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
;`

export default Map;
