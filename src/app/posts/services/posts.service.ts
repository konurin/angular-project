import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {
  }

  getAllPosts() {

    return this.http.get(
      'http://nevo.solutions/wp-json/wp/v2/posts'
    ).map(data => {
      return data;
    })
  }

}
