// context.Request.ContentType = "application/x-www-form-urlencoded";
            int y = context.Request.ContentLength;

            //read image content from request 
            StreamReader stream = new StreamReader(context.Request.InputStream);
            string Base64contentWithContentType = stream.ReadToEnd();


            var ty = Base64contentWithContentType.Split(new string[]{"base64,"}, StringSplitOptions.RemoveEmptyEntries);
            var Base64content = ty[1];
            var contenttype = ty[0];

            var bytes = Convert.FromBase64String(Base64content);

            //save image
            using (var imageFile = new FileStream("C:/Web Basics/Angular/IMA/src/assets/resource images/a.jpg", FileMode.Create))
            {
                imageFile.Write(bytes, 0, bytes.Length);
                imageFile.Flush();
            }