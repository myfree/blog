## Blog

* 项目源码仓库: `main`
* 静态文件路径: `/public`

Author: [Nov8nana](https://github.com/N0v8nana)

Bolg: [https://shuxhan.com](https://shuxhan.com)

### Use

1. Hugo是由Go语言实现的静态网站生成器。简单、易用、高效、易扩展、快速部署。
2. 如果想使用博客，可以直接 fork 本仓库，将 `content` 以及下面 `posts` 内的文件清空，写入自己的文章即可。
3. 本地安装 go 程序，具体方法自行搜索。

```shell
## 本地运行 
hugo server
# 浏览器访问 http://localhost:1313

## 生成静态文件
hugo -D

```

### 配置

一些主要功能的配置方法，如果有其他配置看不懂的可以在 Issues 留言。

<details>
<summary><strong>1. 文章目录</strong></summary>

默认为下列代码，如果需要调整需要在 `config.toml` 配置文件中进行修改。

```shell
[markup]
  [markup.tableOfContents] 
    endLevel = 3      #3级标题以后不建立索引
    ordered = false   #是否采用有序列表
    startLevel = 2    #2级标题开始建立索引

```
</details>


<details>
<summary><strong>2. 第三方评论</strong></summary>

本博客内置的是 Cusdis 评论，请到 [官网](https://cusdis.com/dashboard/project/c1d43485-e8a7-4895-972e-247eddaf242d) 注册并获取 id。

如果遇到问题请参考文章 [hugo 如何使用 Cusdis ?](http://shuxhan.com/post/2021-09-16-hugo-use-cusdis/) 

请将 id 填写在 `config.toml` 中。

```shell
[params]
  CusdisId = "xxxxx"

```
</details>


### 额外的一些说明协议

本仓库并不是一个真正意义上的开源项目，下载仓库代码及使用后果概不负责。

本仓库文章版权均归作者所有，具有最终解释权。

禁止商用等，仅限于学习，个人使用等，传播时注意带 README.md 说明文档。
