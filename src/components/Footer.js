import React from "react";
import styled from "styled-components";
import { Grid } from "../elements";
import { Image } from "../elements";
import { Text } from "../elements";
import A from "./images/a.png";

const Footer = (props) => {
  if (
    //로그인과 회원가입화면에서는 보여주지 않음.
    window.location.pathname === "/login" ||
    window.location.pathname === "/signup"
  )
    return null;

  return (
    <Grid margin="100px 0 0">
      <Grid width="100%" height="100px" margin="auto" bg="#121212">
        <Image src={A} height="100px" />
      </Grid>
      <Grid height="280px">
        <Grid width="1140px" is_flex padding="45px 0 0" margin="0 auto">
          <Grid margin="0px 20px 0px 0px" height="280px">
            {/* /  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px; margin-top: 2px;"><path d="M10.9949 19H8.3639C7.06437 19 6 17.986 6 16.7459V9.72089C6 6.57474 8.70013 4 12.0005 4C15.2999 4 18 6.57474 18 9.72089V16.5" stroke="currentColor"></path><path d="M18 10H19C20.1046 10 21 10.8954 21 12V14C21 15.1046 20.1046 16 19 16H18" stroke="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7431 19.002C13.7431 19.8437 13.0599 20.5269 12.2181 20.5269C11.3764 20.5269 10.6932 19.8437 10.6932 19.002C10.6932 18.1602 11.3764 17.477 12.2181 17.477C13.0599 17.477 13.7431 18.1602 13.7431 19.002Z" stroke="currentColor"></path><path d="M6 10H5C3.89543 10 3 10.8954 3 12V14C3 15.1046 3.89543 16 5 16H6" stroke="currentColor"></path></svg> */}
            <Text size="18px" bold margin="0 0 10px 0">
              무엇을 도와드릴까요?
            </Text>
            <Text size="14px" margin="0" color="rgb(161, 161, 161)">
              평일 10:00 ~ 18:00 (주말 및 공휴일 휴무)
              <br />
              점심시간 12:30 ~ 13:30
            </Text>
          </Grid>
          <Grid margin="0px 20px 0px 0px" height="280px">
            <Text size="18px" bold margin="0 0 10px 0">
              다노샵
            </Text>
            <Text size="16px" margin="20px 0" color="rgb(161, 161, 161)">
              채팅 상담하기
            </Text>
            <hr sytle={{ border: "0.7px solid rgb(161,161,161)" }} />
            <Text size="16px" margin=" 20px 0" color="rgb(105, 105, 105)">
              문의 글 남기기
            </Text>
          </Grid>

          <Grid margin="0px 20px 0px 0px" height="280px">
            <Text size="18px" bold margin="0 0 10px 0">
              다노 채널
            </Text>
            <Grid is_flex width="220px" margin="10px 0">
              <Image
                src="https://danoshop.net/mall/upload/resource/common/footer-icon-youtube.png"
                width="40px"
                height="40px"
              />
              <Image
                src="https://danoshop.net/mall/upload/resource/common/footer-icon-instagram.png"
                width="40px"
                height="40px"
              />
              <Image
                src="https://danoshop.net/mall/upload/resource/common/footer-icon-blog.png"
                width="40px"
                height="40px"
              />
              <Image
                src="https://danoshop.net/mall/upload/resource/common/footer-icon-facebook.png"
                width="40px"
                height="40px"
              />
            </Grid>
          </Grid>

          <Grid height="280px">
            <Text size="18px" bold margin="0 0 10px 0">
              제휴 / 입점문의
            </Text>
            <Grid
              border="1px solid rgb(236, 236, 236)"
              height="38px"
              padding="12px"
              center
            >
              <Text size="12px" margin="0">
                다노샵 입점 신청하기
              </Text>
            </Grid>
            <Grid margin="10px 0">
              <Text size="12px" color="rgb(161, 161, 161)">
                <span width="13.87px" color="rgb(105, 105, 105)">
                  입점 제안 문의
                </span>
                support@danoshop.net
              </Text>
            </Grid>
            <Grid margin="10px 0">
              <Text size="12px" color="rgb(161, 161, 161)">
                <span width="13.87px" color="rgb(105, 105, 105)">
                  마케팅 제휴 문의
                </span>
                dano.mkt@gmail.com
              </Text>
            </Grid>
            <Grid margin="10px 0">
              <Text size="12px" color="rgb(161, 161, 161)">
                <span width="13.87px" color="rgb(105, 105, 105)">
                  통합 약관
                </span>
                <span width="13.87px" color="rgb(105, 105, 105)">
                  이용 약관
                </span>
                <span width="13.87px" color="rgb(105, 105, 105)">
                  개인정보처리방침
                </span>
              </Text>
            </Grid>

            <Grid margin="10px 0">
              <Text size="10px" color="rgb(161, 161, 161)">
                <span width="13.87px" color="rgb(105, 105, 105)">
                  대표:정범윤 | 주소:서울시 마포구 토정로 271 (주)다노
                </span>
                <span width="13.87px" color="rgb(105, 105, 105)">
                  사업자등록번호:106-87-00202 사업자 정보 확인
                </span>
                <span width="13.87px" color="rgb(105, 105, 105)">
                  개인정보보호책임자:이지수
                </span>
                <span width="13.87px" color="rgb(105, 105, 105)">
                  통신판매업 신고번호:제2017-마포-0722
                </span>
                <span width="13.87px" color="rgb(105, 105, 105)">
                  건강기능식품판매업 신고번호:제 2018-0069040호
                </span>
                <span width="13.87px" color="rgb(105, 105, 105)">
                  Copyright © DANO, Inc. All Rights Reserved.
                </span>
              </Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
