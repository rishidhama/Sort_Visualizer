var codes = {
    "C": `
  void merge(int arr[], int l, int m, int r)
  {
      int i, j, k;
      int n1 = m - l + 1;
      int n2 = r - m;
  
      int L[n1], R[n2];
  
      for (i = 0; i < n1; i++)
          L[i] = arr[l + i];
      for (j = 0; j < n2; j++)
          R[j] = arr[m + 1 + j];
  
      i = 0;
      j = 0;
      k = l;
  
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
  
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
  
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
  
  void mergeSort(int arr[], int l, int r)
  {
      if (l < r) {
          int m = l + (r - l) / 2;
  
          mergeSort(arr, l, m);
          mergeSort(arr, m + 1, r);
          merge(arr, l, m, r);
      }
  }`,
  
    "C++": `
  void merge(int *array, int l, int m, int r) {
     int i, j, k, nl, nr;
     nl = m-l+1; nr = r-m;
     int larr[nl], rarr[nr];
  
     for(i = 0; i&lt;nl; i++)
        larr[i] = array[l+i];
  
     for(j = 0; j&lt;nr; j++)
        rarr[j] = array[m+1+j];
  
     i = 0; j = 0; k = l;
  
     while(i &lt; nl && j&lt;nr) {
        if(larr[i] &lt;= rarr[j]) {
           array[k] = larr[i];
           i++;
        } else {
           array[k] = rarr[j];
           j++;
        }
        k++;
     }
     while(i&lt;nl) {
        array[k] = larr[i];
        i++; k++;
     }
     while(j&lt;nr) {
        array[k] = rarr[j];
        j++; k++;
     }
  }
  
  void mergeSort(int *array, int l, int r) {
     int m;
     if(l &lt; r) {
        int m = l+(r-l)/2;
  
        mergeSort(array, l, m);
        mergeSort(array, m+1, r);
        merge(array, l, m, r);
     }
  }`,
  
    Java: `
  void merge(int arr[], int l, int m, int r)
  {
      int n1 = m - l + 1;
      int n2 = r - m;
  
      int L[] = new int[n1];
      int R[] = new int[n2];
  
      for (int i = 0; i < n1; ++i)
          L[i] = arr[l + i];
      for (int j = 0; j < n2; ++j)
          R[j] = arr[m + 1 + j];
  
      int i = 0, j = 0;
  
      int k = l;
      while (i < n1 && j < n2) {
          if (L[i] <= R[j]) {
              arr[k] = L[i];
              i++;
          }
          else {
              arr[k] = R[j];
              j++;
          }
          k++;
      }
  
      while (i < n1) {
          arr[k] = L[i];
          i++;
          k++;
      }
  
      while (j < n2) {
          arr[k] = R[j];
          j++;
          k++;
      }
  }
  
  void sort(int arr[], int l, int r)
  {
      if (l < r) {
          int m =l+ (r-l)/2;
  
          sort(arr, l, m);
          sort(arr, m + 1, r);
  
          merge(arr, l, m, r);
      }
  }`,
    JavaScript: `
  function mergeSort(array) {
    const half = array.length / 2
  
    if (array.length < 2){
      return array
    }
  
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }
  
  function merge(left, right) {
      let arr = []
  
      while (left.length && right.length) {
          if (left[0] < right[0]) {
              arr.push(left.shift())
          } else {
              arr.push(right.shift())
          }
      }
  
      return [ ...arr, ...left, ...right ]
  }`,
    Python: `
  def mergeSort(arr):
      if len(arr) > 1:
          mid = len(arr)//2
          L = arr[:mid]
          R = arr[mid:]
  
          mergeSort(L)
          mergeSort(R)
  
          i = j = k = 0
  
          while i < len(L) and j < len(R):
              if L[i] < R[j]:
                  arr[k] = L[i]
                  i += 1
              else:
                  arr[k] = R[j]
                  j += 1
              k += 1
  
          while i < len(L):
              arr[k] = L[i]
              i += 1
              k += 1
  
          while j < len(R):
              arr[k] = R[j]
              j += 1
              k += 1`,
  };