#!/bin/bash
rm "CNAME"
sed -i "s/gh.zhangkai.xin/nl.zhangkai.xin/g" `grep gh.zhangkai.xin -rl ./`
find ./ -name "*gh.zhangkai.xin*" | while read f; do mv $f ${f/gh.zhangkai.xin/nl.zhangkai.xin}; done