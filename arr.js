import java.util.Scanner;

public class Sas {

	public static void main(String[] args) {
		Scanner kb=new Scanner(System.in);
		String asi,lok,er,af,dis,Y,N,fast,end;
		double kg=0,fast1=0,price=0;
		System.out.println("Enter a dis: ");
		dis=kb.next();
		while(!(dis.equalsIgnoreCase("end"))) {
			
			System.out.println("Enter the wight: ");
			kg=kb.nextDouble();
			System.out.println("do you want fast shaping (Y/N): ");
			fast=kb.next();
			if(fast.equalsIgnoreCase("Y")){
				fast1=1.1;
			}
			else if (fast.equalsIgnoreCase("N")){
				fast1=1.0;
			}
			if(dis.equalsIgnoreCase("lok")) {
				if(kg>1 && kg<=10) {
					price=10;
				}else if(kg>10) {
					price=(kg-10)*1.5+10;
				
				
				}
			}else if(dis.equalsIgnoreCase("asi")) {
				if(kg>1 && kg<=10) {
					price=10;
				}else if(kg>10) {
					price=(kg-10)*2+15;
				}
				
			}else if(dis.equalsIgnoreCase("af")) {
				if(kg>1 && kg<=10) {
					price=10;
				}else if(kg>10) {
					price=(kg-10)*3+20;
				}
				
			}else if(dis.equalsIgnoreCase("er")) {
				if(kg>1 && kg<=10) {
					price=10;
				}else if(kg>10) {
					price=(kg-10)*4+30;
				}
				
			}
					
			System.out.println("The bill to ship"+kg+"KG"+dis+"is: "+price*fast1+"SR");
			System.out.println("Enter a dis: ");
			dis=kb.next();
			
			
		}
		System.out.println("Thnks Good bye  :) ");
	}

}

